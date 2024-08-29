import { getData } from '@/actions/todoActions'
import Table from '@/components/table'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const Page = async () => {

  const { userId } = await auth()
  
  if (userId) {
    const data = (await getData(userId)).filter(item => item.done === true)
    // const formattedData = [
    //   {
    //     task: data[0]?.text,
    //     date: data[0]?.updatedAt.toDateString()
    //   }
    // ]
    const formattedData = data.map((item) => ({
      task: item.text,
      date: item.updatedAt.toDateString()
    }))

    return (
      <div className='pt-12 px-12 w-full flex justify-center'>
        <Table tasks={formattedData} done={true} />
      </div>
    )
  } return null
}

export default Page
