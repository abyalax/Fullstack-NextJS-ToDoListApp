import { formatDate } from '@/lib/utils'
import React from 'react'

interface Props {
  results: any
}

const SearchResults = ({results}: Props) => {
  return (
    <div className='absolute top-14 gap-2 flex flex-col max-h-96 overflow-hidden rounded-xl w-full shadow-xl bg-white dark:bg-[#121212]'>
      {results.map((item: any) => (
        <div key={item.id} className='cursor-pointer hover:bg-[#f5f5f5]  dark:hover:bg-[#3B3B3B]' onClick={() => console.log(item)}>
          <p className='mx-4 mt-2'>{item.text}</p>
          {/* <p className='mx-4'>{formatDate(item.updatedAt)}</p> */}
          <p className='mx-4'>{`Created: ${formatDate(item.createdAt)}`}</p>
          <p className='mx-4'>{formatDate(item.plannedAt) ? `Planned: ${formatDate(item.plannedAt)}` : ''}</p>
          <p className='mx-4 mb-2'>{item.done}</p>
        </div>
      ))}
    </div>
  )
}

export default SearchResults
