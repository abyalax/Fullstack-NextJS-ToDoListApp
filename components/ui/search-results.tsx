"use client"
import { useDetails } from '@/hooks/use-todo'
import { formatDate } from '@/lib/utils'
import { todoType } from '@/type/type'
import React, { useState } from 'react'
import DetailsTodo from '../todo/details'
import { addTodo } from '@/actions/todoActions'
import { useAuth } from '@clerk/nextjs'

interface Props {
  results: todoType[]
}

const SearchResults = ({ results }: Props) => {
  const {isOpen, onClose, onOpen, setTodo, todo} = useDetails()
  const { userId } = useAuth();

  const handleTodoClick = (item: todoType) => {
    setTodo(item);
    console.log(item);
    onOpen()
  };

  const createTodo = (text: string, note?: string, plannedAt?: Date | null) => {
    const id = `${Date.now() + Math.random()}`;
    if (userId) addTodo(id, text, userId, note, plannedAt);
  };

  return (
    <>
      <div className='absolute top-14 gap-2 flex flex-col max-h-96 overflow-hidden rounded-xl w-full shadow-xl bg-white dark:bg-[#121212]'>
        {results.map((item: todoType) => (
          <div key={item.id} className='cursor-pointer hover:bg-[#f5f5f5]  dark:hover:bg-[#3B3B3B]' onClick={() => handleTodoClick(item)}>
            <p className='mx-4 mt-2'>{item.text}</p>
            <p className='mx-4'>{`Created: ${formatDate(item.createdAt)}`}</p>
            <p className='mx-4'>{formatDate(item.plannedAt) ? `Planned: ${formatDate(item.plannedAt)}` : ''}</p>
            <p className='mx-4 mb-2'>{item.done}</p>
          </div>
        ))}
        {todo ? <DetailsTodo createTodo={createTodo}/> : null}
      </div>
    </>
  )
}

export default SearchResults
