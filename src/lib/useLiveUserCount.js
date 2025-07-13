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

export const usePresence = () => {
    useEffect(() => {
        const userId = Math.random().toString(36).slice(2)
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
            onDisconnect(userRef).cancel()
            unsub()
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

