"use client"
import { usePathname } from 'next/navigation'
import { useMediaQuery } from 'usehooks-ts'
import { SidebarDesktop, SidebarMobile } from './sidebar'
import { HomeIcon, CircleCheckBig, ClipboardList, CalendarDays } from 'lucide-react'

const SidebarLeft = () => {
    const isDesktop = useMediaQuery('(min-width: 640px)', {
        initializeWithValue: false
    })
    const pathname = usePathname()
    const routes = [
        {
            label: "Home",
            href: "/home",
            active: pathname === "/home",
            icon: <HomeIcon size={15}/>
        },
        {
            label: "Task",
            href: "/task",
            active: pathname === "/task",
            icon: <ClipboardList size={15}/>
        },
        {
            label: "Planned",
            href: "/planned",
            active: pathname === "/planned",
            icon: <CalendarDays size={15} />
        },
        {
            label: "Finished",
            href: "/finish",
            active: pathname === "/finish",
            icon: <CircleCheckBig size={15}/>
        },
    ]
    if (!isDesktop) return <SidebarMobile routes={routes} />
    return <SidebarDesktop routes={routes} />
}

export default SidebarLeft
