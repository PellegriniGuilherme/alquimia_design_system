import React from 'react'

export type ButtonProps = {
  children: string
}

export default function Button({ children }: ButtonProps) {
  return (
    <div>
      <button className='rounded-2xl px-10 py-5 bg-pink-400'>
        {children}
      </button>
    </div>
  )
}