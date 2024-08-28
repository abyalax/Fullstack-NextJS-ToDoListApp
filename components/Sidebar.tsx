"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const pathname = usePathname()

    const routes = [
        {
            label: "Home",
            href: "/",
            active: pathname === "/"
        },
        {
            label: "Task",
            href: "/",
            active: pathname === "/"
        },
        {
            label: "Finished",
            href: "/",
            active: pathname === "/"
        },
    ]

    return (
        <div className='border-r left-0 top-0 h-screen w-64 flex flex-col space-y-2 gap-2 p-4'>
            <h1 className='text-2xl font-semibold'>Sidebar</h1>
            {routes.map((route) => (
                <button key={route.href} className='w-full py-2 rounded-md hover:bg-slate-400'>
                    <Link href={route.href}>{route.label}</Link>
                </button>
            ))}
        </div>
    )
}

export default Sidebar
