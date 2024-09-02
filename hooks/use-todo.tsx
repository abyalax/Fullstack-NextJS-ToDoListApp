"use client"
import {create} from "zustand"
import { todoType } from "@/type/type"

interface useProps {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
    todo: todoType | null
    setTodo: (todo: todoType | null) => void
}

export const useDetails = create<useProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
    todo: null,
    setTodo: (todo: todoType | null) => set({todo}),
}))