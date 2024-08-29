import React from 'react'

const AuthLayout = async ({children}: {children: React.ReactNode}) => {

  // const user = await (await getAllUser()).find(user => user.email === "abyalaxx@gmail.com")

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-slate-200'>
      {children}
    </div>
  )
}

export default AuthLayout
