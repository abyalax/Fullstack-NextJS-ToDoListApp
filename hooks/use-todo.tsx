"use client"
import {create} from "zustand"

interface useProps {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useDetails = create<useProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))