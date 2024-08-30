import { getData } from '@/actions/todoActions'
import Table from '@/components/table'
import { auth } from '@clerk/nextjs/server'

const Page = async () => {

  const { userId } = await auth()
  
  if (userId) {
    const data = (await getData(userId)).filter(item => item.done === false)
    const formattedData = data.map((item) => ({
      task: item.text,
      date: item.createdAt.toDateString()
    }))

    return (
      <div className='pt-12 px-12 w-full flex justify-center'>
        <Table tasks={formattedData} done={false} />
      </div>
    )
  } return null
}

export default Page
