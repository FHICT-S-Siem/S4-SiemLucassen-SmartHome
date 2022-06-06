import React, { FC } from 'react'
import Image from 'next/image'
import { DetectionProps } from './Detection'

const DetectionPreview: FC<{ detections: DetectionProps[]}> = (props) => {
  return (
    <div className='catcard'>
        <h1 className='font-bold text-center mb-3'>Cat preview</h1>
        <div className="flex flex-row justify-center items-center mb-3">
          <Image className='rounded-xl' src="/../public/img/sammy-example.jpeg" width={'200'} height={'250'} alt="Sammy" />
        </div>
        <p className='text-center'>
              9 May 2022
        </p>
        <p>Name(s): x</p>
        {/* <p>Detected at: {props.detectedAt}</p>
        <p>Amount: {props.objects.length}</p> */}
    </div>
  )
}

export default DetectionPreview