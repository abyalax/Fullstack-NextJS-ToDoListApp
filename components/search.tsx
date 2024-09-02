'use client'
import { useState } from 'react'
import SearchBar from './ui/search-bar'
import SearchResults from './ui/search-results'
import { todoType } from '@/type/type'

const Search = () => {

    const [results, setResults] = useState<todoType[]>([])

  return (
    <div className='relative w-full mx-[10%] sm:mx-[10%] flex flex-col'>
      <SearchBar setResults={setResults}/>
      <SearchResults results={results}/>
    </div>
  )
}

export default Search
