import { getData } from '@/actions/todoActions';
import Todos from '@/components/todos'
import React from 'react'

const Page = async () => {

  const data = await getData();
  
  return (
    <div>
      <Todos todos={data} />
    </div>
  )
}

export default Page
