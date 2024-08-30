'use client'
import React, { useState } from 'react'
import { Input } from './input'
import { SearchIcon } from 'lucide-react'

interface Props {
  setResults: any
}

const SearchBar = ({setResults }: Props) => {
  const [input, setInput] = useState('')

  const fetchData = (value: string) => {
    fetch('http://localhost:3000/api')
      .then(res => res.json())
      .then(json => {
        // const results = json.filter((item: any) => item.title.includes(value))
        const results = json.filter((item: any) => value && item.text.toLowerCase().includes(value.toLowerCase()))
        console.log(results);
        setResults(results)
        return results
      })
  }

  const handleChange = (value: string) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div className='mx-4 flex flex-row shadow-md justify-center items-center'>
      <div className='pl-3 py-2 pr-2 h-10 bg-white border-l border-t border-b border-slate-500 dark:bg-black rounded-l-xl text-black dark:text-white'>
        <SearchIcon size={20} />
      </div>
      <Input
        type='text'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder='Type Here to Search..'
        className='border-r border-t border-b rounded-r-xl border-slate-500  dark:border-slate-600' />
    </div>
  )
}

export default SearchBar
