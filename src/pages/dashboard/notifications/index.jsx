import React from 'react'
import { MdConstruction } from "react-icons/md";

const Notifications = () => {
  return (
    <>
    <h2 className='font-bold text-blue-900 text-2xl'>Notification</h2>
    <div className='h-full flex flex-col justify-center align-middle items-center'>
      <h1 className='text-5xl font-bold text-gray-800'>This page is site construction</h1>
      <MdConstruction size={200} className='text-gray-800'/>
    </div>
    </>
  )
}

export default Notifications