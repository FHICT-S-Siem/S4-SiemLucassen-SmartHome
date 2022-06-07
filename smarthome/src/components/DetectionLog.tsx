import React, { FC, useContext } from 'react'

import { DetectionProps } from './Detection'
import { Context } from '../pages/Store'

const DetectionLog: FC<{ detections: DetectionProps[]}> = ({detections}) => {
    //set id for the DetectionPreview
    const store = useContext(Context)
 
    const handleDetectionPreview = async (id: number) => {
      const res = await fetch(`/api/detection/${id}`)
      const data = await res.json()
      store.dispatch({ type: "setDetections", payload: data})
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
    </>
  )
}

export default DetectionLog