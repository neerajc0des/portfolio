import { useEffect, useState } from "react"
import {
    ref,
    onValue,
    set,
    onDisconnect,
    serverTimestamp,
    remove,
} from "firebase/database"

import { dbRealtime } from "./firebase"

const getOrCreateVisitorId = () => {
    const storedId = localStorage.getItem("visitorId");
    if (storedId) return storedId;
    const newId = Math.random().toString(36).slice(2);
    localStorage.setItem("visitorId", newId);
    return newId;
  };

export const usePresence = () => {
    useEffect(() => {
        const userId = getOrCreateVisitorId();
        const userRef = ref(dbRealtime, `presence/${userId}`)
        const connectedRef = ref(dbRealtime, ".info/connected")

        const unsub = onValue(connectedRef, (snap) => {
            if (snap.val() === true) {
                // User is connected: add them to presence
                set(userRef, {
                    connected: true,
                    lastOnline: serverTimestamp(),
                })
                // Remove from presence on disconnect
                onDisconnect(userRef).remove()
            }
        })

        return () => {
            onDisconnect(userRef).cancel();
            remove(userRef);
            unsub();
        }
    }, [])
}

export const useLiveUserCount = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const presenceRef = ref(dbRealtime, "presence")

        const unsub = onValue(presenceRef, (snapshot) => {
            const data = snapshot.val()
            setCount(data ? Object.keys(data).length : 0)
        })

        return () => unsub()
    }, [])

    return count
}

