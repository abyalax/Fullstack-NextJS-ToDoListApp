import {
    Table as TableC,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface Props {
    tasks: {
        task: string
        date: string
    }[],
    done: boolean
}

const Table = ({ tasks, done }: Props) => {
    const length = tasks.length
    return (
        <TableC>
            {/* <TableCaption>Finished Your Tasks</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">No</TableHead>
                    <TableHead>Task</TableHead>
                    <TableHead className="text-right">{done ? 'Completion' : 'Date Task'}</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tasks.map((task, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{length > 0 ? index + 1 : ''}</TableCell>
                        <TableCell>{task.task}</TableCell>
                        <TableCell className="text-right">{task.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </TableC>

    )
}

export default Table
