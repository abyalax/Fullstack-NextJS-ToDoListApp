import React from 'react'
import { Input } from './ui/input'
import { SearchIcon } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className='mx-4 flex flex-row justify-center items-center'>
      <div className='pl-3 py-2 pr-2 h-10 bg-white border-l border-t border-b border-slate-500 dark:bg-black rounded-l-xl text-black dark:text-white'>
        <SearchIcon size={20} />
      </div>
      <Input type='text' placeholder='Search..' className='border-r border-t border-b rounded-r-xl border-slate-500  dark:border-slate-600' />
    </div>
  )
}

export default SearchBar
