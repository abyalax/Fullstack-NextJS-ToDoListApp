import TodosList from '@/components/todo/todos';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getData } from '@/actions/todoActions';

const Page = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in')
  }

  const data = await getData(userId)

  /**
   * const data: {
    userId: string;
    id: string;
    text: string;
    note: string | null;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
    plannedAt: Date | null;
}[]
   */

  /**
   * todoType
   * id: string;
    text: string;
    note?: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
    plannedAt: Date | null;
   */

  return (
    <div className='w-full'>
      <TodosList todos={data}/>
    </div>
  )
}

export default Page
