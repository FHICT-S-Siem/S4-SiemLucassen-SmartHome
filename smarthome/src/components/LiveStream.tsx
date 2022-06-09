import React, { FC } from 'react'
import Image from 'next/image'
import { BsCameraVideoFill } from 'react-icons/bs'

const LiveStream: FC = () => {
  return (
    <div className='catcard'>
        <div className='flex flex-row items-center justify-center'>
          <h1 className=' flex-col font-bold'>Live stream</h1>
          <BsCameraVideoFill className='ml-2 text-xl mt-1 flex-col' /> 
        </div>
        <div className="flex flex-row justify-start items-center">
        </div>
      </div>   
  )
}

export default LiveStream