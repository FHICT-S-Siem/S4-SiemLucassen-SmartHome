import React, {FC, useContext, useEffect, useState} from 'react'
import Image from 'next/image'
import { Context } from "../pages/Store"

interface DetectionProps {
  id: number
  objects: {
    id: number,
    detection: DetectionProps
    objId: number,
    xMin: number
    yMin: number
    xMax: number
    yMax: number
    confidence: number
    type: string
  }[]
  detectedAt: string
  image: string
}

const Detection: FC<DetectionProps>  = (props) => {
  const {id, objects, detectedAt, image} = props
  const store = useContext(Context)

  return (
  <div className="flex flex-row">
    <div className='catcard'>
      <div className='overflow-auto w-44 h-96'>
        <h1 className='font-bold text-center mb-3'>Cat detection log</h1>
        <ul>
          {store.state.detections?.map(d => 
           <li key={d.id} className='list-item mb-5 rounded-md bg-secondary w-100  text-white'>
            <p className='text-center'>
              {props.detectedAt}
            </p>
           </li>)}
         
          <li className='list-disc mb-5 rounded-md bg-blue-500 w-100 text-white'>
            <p className='text-center'>
              {props.detectedAt}
            </p>
          </li>     
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
        <p>Detected at: x</p>
        <p>Amount: x</p>
        {/* <p>{props.objects.length}</p>    */}
      </div>

    <div className='flex flex-col'>
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
  </div>
  )
}

export { Detection as default, type DetectionProps }