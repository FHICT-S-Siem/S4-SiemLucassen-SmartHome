import React, { FC } from 'react'
import Image from 'next/image'

const LiveStream: FC = () => {
  return (<div className='flex flex-col'>
    <div className='catcard'>
        <h1 className='font-bold text-center mb-3'>Window</h1>
        <div className="flex flex-row justify-center items-center">
          <Image className='rounded-xl' src="/../public/img/window.jpeg" height={'350'} width={'270'} alt="Sammy" />
        </div>
      </div>

      <div className='catcard'>
        <h1 className='font-bold text-center mb-3'>Food tray</h1>
        <div className="flex flex-row justify-center items-center">
          <Image className='rounded-xl' src="/../public/img/tray.jpeg" height={'350'} width={'270'} alt="Sammy" />
        </div>
      </div>
    </div>
  )
}

export default LiveStream