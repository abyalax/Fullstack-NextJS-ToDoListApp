"use client"
import { SheetClose, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet"
import { NotebookPen, NotepadText } from "lucide-react"
import { Button } from "../ui/button"
import SidebarRight from "../sidebar/sidebar-right"
import { useDetails } from "@/hooks/use-todo"
import { CalendarForm } from "../ui/date-picker"
import { useState, FormEvent, useEffect } from "react"

interface Props {
    todos: {
        text: string
        note?: string | null
        done: boolean
        id: string
        createdAt?: Date
        updatedAt?: Date
        plannedAt?: Date | null
    },
    createTodo: (text: string, note?: string, plannedAt?: Date | null) => void
}

const DetailsTodo = ({ todos, createTodo }: Props) => {
    const detailTodo = useDetails()
    const [selectedDate, setSelectedDate] = useState<Date | null>(todos?.plannedAt ?? null);
    const [taskText, setTaskText] = useState<string>(todos?.text);
    const [noteText, setNoteText] = useState<string>(todos?.note || '');

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        if (todos) {
            setTaskText(todos.text);
            setNoteText(todos.note ?? '');
            setSelectedDate(todos.plannedAt ?? null);
        }
    }, [todos]);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        createTodo(taskText, noteText, selectedDate);
        setTaskText('');
        setNoteText('');
        setSelectedDate(null);
        detailTodo.onClose();
    };

    if (!todos) {
        return null;
    }
    return (
        <SidebarRight isOpen={detailTodo.isOpen} onOpen={detailTodo.onOpen} onClose={detailTodo.onClose}>
            <SheetHeader className='my-7'>
                <SheetTitle>Todo App</SheetTitle>
                <SheetDescription>
                    Description Todo App
                </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 py-4 my-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="task" className="text-right flex gap-2">
                        <NotebookPen />
                        Task
                    </label>
                    <input
                        id="task"
                        value={taskText}
                        defaultValue={todos?.text}
                        onChange={(e) => setTaskText(e.target.value)}
                        placeholder='Add Your Task'
                        className="col-span-3 p-2 dark:placeholder-slate-600 dark:border-slate-600 dark:border rounded-xl dark:focus:border-2 dark:focus:border-white"
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="note" className="text-right flex gap-2">
                        <NotepadText />
                        Note
                    </label>
                    <input
                        id="note"
                        value={noteText}
                        defaultValue={todos?.note || ''}
                        onChange={(e) => setNoteText(e.target.value)}
                        placeholder='Add Some Notes'
                        className="col-span-3 p-2 dark:placeholder-slate-600 dark:border-slate-600 dark:border rounded-xl dark:focus:border-2 dark:focus:border-white"
                    />
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save to my Task</Button>
                    </SheetClose>
                    <SheetClose asChild>
                        <CalendarForm onDateSelect={handleDateSelect} text='Save to my Plan' />
                    </SheetClose>
                </SheetFooter>
            </form>
        </SidebarRight>
    );
}

export default DetailsTodo;
