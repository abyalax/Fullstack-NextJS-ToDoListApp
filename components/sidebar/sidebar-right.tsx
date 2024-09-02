"use client"
import { CircleChevronLeft } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import {useDetails} from "@/hooks/use-todo"

interface Props {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
    children: React.ReactNode
}

const SidebarRight = ({ children }: Props) => {
    const detailTodo = useDetails();

    const onChange = (open: boolean) => {
        if (!open) {
            detailTodo.onClose();
        }
    };

    return (
        <Sheet open={detailTodo.isOpen} onOpenChange={onChange}>
            <SheetTrigger asChild className='fixed z-10 right-2 top-20'>
                <Button onClick={detailTodo.onOpen}>
                    <CircleChevronLeft className='w-7 h-7' />
                </Button>
            </SheetTrigger>
            <SheetContent className='text-black dark:text-white bg-white dark:bg-black'>
                {children}
            </SheetContent>
        </Sheet>
    );
};

export default SidebarRight;
