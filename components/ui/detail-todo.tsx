"use client"
import Link from 'next/link'
import React from 'react'
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SignOutButton } from '@clerk/nextjs'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './sheet'
import { Button } from './button'
import { Input } from './input'

interface DetailsProps {
    routes: {
        label: string,
        href: string,
        active: boolean,
        icon: React.ReactNode
    }[],
}

export const DetailsMobile = ({ routes }: DetailsProps) => {
    return (
        <Sheet>
            <SheetTrigger asChild className='fixed z-10 left-2 top-20'>
                <Button>
                    <CircleChevronLeft className='w-7 h-7' />
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className='absolute left-0 top-0 w-auto p-0 text-white'>
                <div className='dark:bg-black bg-white text-black dark:text-white h-screen w-64 flex flex-col space-y-2 gap-2 pt-14 pl-4'>
                    <h1 className='text-2xl font-semibold'>Details</h1>
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

export const DetailsDesktop = ({ routes }: DetailsProps) => {

    return (
        <Sheet>
            <SheetTrigger asChild className='fixed z-10 right-2 top-20'>
                <Button>
                    <CircleChevronLeft className='w-7 h-7' />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className='my-7'>
                    <SheetTitle>Edit Tasks</SheetTitle>
                    <SheetDescription>
                        {"Make changes to your todo here. Click save when you're done."}
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4 my-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="task" className="text-right">
                            Task
                        </label>
                        <Input id="task" placeholder='Add Your Task' className="col-span-3 dark:placeholder-slate-600 dark:border-slate-600 dark:border rounded-xl dark:focus:border-2 dark:focus:border-white" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="note" className="text-right">
                            Note
                        </label>
                        <Input id="note" placeholder='Add Some Notes' className="col-span-3 dark:placeholder-slate-600 dark:border-slate-600 dark:border rounded-xl dark:focus:border-2 dark:focus:border-white" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="date" className="text-right">
                            Date
                        </label>
                        <Input id="date" placeholder='Planning Your Task' className="col-span-3 dark:placeholder-slate-600 dark:border-slate-600 dark:border rounded-xl dark:focus:border-2 dark:focus:border-white" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save to my Task</Button>
                    </SheetClose>
                    <SheetClose asChild>
                        <Button type="submit">Save to my Planned</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
