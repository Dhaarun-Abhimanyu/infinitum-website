'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const SoundContext = createContext(null);

export function SoundProvider({ children }) {
    const [isMuted, setIsMuted] = useState(false);

    // Load mute state from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('soundMuted');
        if (stored !== null) {
            setIsMuted(stored === 'true');
        }
    }, []);

    // Save mute state to localStorage
    const toggleMute = useCallback(() => {
        setIsMuted(prev => {
            const newValue = !prev;
            localStorage.setItem('soundMuted', String(newValue));
            return newValue;
        });
    }, []);

    return (
        <SoundContext.Provider value={{ isMuted, toggleMute }}>
            {children}
        </SoundContext.Provider>
    );
}

export function useSound() {
    const context = useContext(SoundContext);
    if (!context) {
        return { isMuted: false, toggleMute: () => { } };
    }
    return context;
}
