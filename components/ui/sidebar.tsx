"use client"
import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './sheet'
import { Button } from './button'
import { CircleChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarProps {
    routes: {
        label: string,
        href: string,
        active: boolean,
        icon: React.ReactNode
    }[],
}

export const SidebarMobile = ({ routes }: SidebarProps) => {
    return (
        <Sheet>
            <SheetTrigger asChild className='absolute z-10 left-2 top-1'>
                <Button>
                    <CircleChevronRight className='w-7 h-7' />
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className='absolute left-0 top-0 w-auto p-0 text-white'>
                <div className='dark:bg-black bg-white text-black dark:text-white h-screen w-64 flex flex-col space-y-2 gap-2 pt-14 pl-4'>
                    <h1 className='text-2xl font-semibold'>Sidebar</h1>
                    {routes.map((route) => (
                        <Button key={route.href} style={{ borderRadius: '10px' }} className={cn(
                            'w-full flex flex-row gap-2 py-2 rounded-lg dark:hover:bg-[#212124] hover:bg-[#f5f5f5]',
                            route.active && 'bg-[#f5f5f5] dark:bg-[#212124]'
                        )}>
                            <Link href={route.href} className='flex flex-row gap-2 justify-start'>
                                {route.icon}
                                {route.label}
                            </Link>
                        </Button>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export const SidebarDesktop = ({ routes }: SidebarProps) => {

    return (
        <div className='bg-white border-r border-gray-500 dark:border-gray-600 text-black dark:text-white dark:bg-black left-0 top-0 h-screen w-64 flex flex-col space-y-2 gap-2 p-4'>
            <h1 className='text-2xl font-semibold'>Sidebar</h1>
            {routes.map((route) => (
                <Link href={route.href} key={route.href} className={cn(
                    'w-full flex flex-row gap-2 items-center py-2 pl-2 rounded-md dark:hover:bg-[#212124] hover:bg-[#f5f5f5]',
                    route.active && 'bg-[#f5f5f5] dark:bg-[#212124]'
                )}>
                    {route.icon}
                    {route.label}
                </Link>
            ))}
        </div>
    )
}
