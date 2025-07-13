"use client"
import React from 'react'

interface CircularProgressCounterProps {
    currentChars: number;
    maxLength: number;
    strokeWidth?: number;
    trackColor?: string;
    textColor?: string;
}

const CharacterCounter: React.FC<CircularProgressCounterProps> = ({
    currentChars,
    maxLength,
    strokeWidth = 4,
    trackColor = '#e0e0e0',
    textColor = '#333',
}) => {

    const radius = (10 - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progressPercentage = (currentChars / maxLength) * 100;

    const dashOffset = circumference * (1 - (maxLength - currentChars) / maxLength);

    const remainingChars = maxLength - currentChars;
    const fillPercentage = currentChars / maxLength;
    const animatedDashOffset = circumference * (1 - fillPercentage);

    const displayedCount = Math.max(0, maxLength - currentChars);



    return (
        <div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
        >
            <svg
                width={size}
                height={size}
                className="transform -rotate-90" // Start filling from the top
            >
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                />
                {/* Progress circle */}
                <circle
                    cx={20 / 2}
                    cy={20 / 2}
                    r={radius}
                    fill="transparent"
                    stroke={progressColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={animatedDashOffset}
                    className="transition-all duration-300 ease-in-out" 
                />
            </svg>
            {/* Text in the center */}
            <div
                className="absolute text-sm font-medium"
                style={{ color: textColor }}
            >
                {displayedCount}
            </div>
        </div>
    )
}

export default CharacterCounter