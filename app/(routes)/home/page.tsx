import { getData } from '@/actions/todoActions';
import Todos from '@/components/todos'
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const Page = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in')
  }

  const data = await getData(userId)

  return (
    <div className='w-full'>
      <Todos todos={data}/>
    </div>
  )
}

export default Page
