import React, { FC } from 'react'
import { DetectionProps } from './Detection'
import Image from 'next/image'
import DetectionPreview from './DetectionPreview'

const DetectionLog: FC<{ detections: DetectionProps[]}> = ({detections}) => {

    //set id for the DetectionPreview
    const handleDetectionPreview = async (id: number) => {
        const res = await fetch(`/api/detection/${id}`)
        const data = await res.json()
    }
        
  return (<>
    <div className='catcard'>
      <div className='overflow-auto w-auto h-auto'>
        <h1 className='font-bold text-center mb-3'>Cat detection log</h1>
        <ul>
            {detections.map(d => 
            <li className='list-item mb-5 rounded-md cursor-pointer bg-secondary w-100  text-white' key={d.id}>
                <button onClick={() => handleDetectionPreview(d.id)} className='w-full hover:shadow-md'>
                    {d.detectedAt}
                </button>
            </li>
            )} 
        </ul>
      </div>
    </div>
    <div className='catcard'>
        <h1 className='font-bold text-center mb-3'>Cat preview</h1>
        <div className="flex flex-row justify-center items-center mb-3">
          <Image className='rounded-xl' src="/../public/img/sammy-example.jpeg" width={'200'} height={'250'} alt="Sammy" />
        </div>
        <p className='text-center'>
              9 May 2022
        </p>
        <p>Name(s): x</p>
        <p>Detected at: {props.detectedAt}</p>
        <p>Amount: {props.objects.length}</p>
    </div>
    </>
  )
}

export default DetectionLog