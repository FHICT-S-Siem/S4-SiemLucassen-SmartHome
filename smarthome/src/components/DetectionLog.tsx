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

    const secondsToElapsedTime = (detectedAt:number) => {
      const seconds = Math.round((Date.now()-detectedAt*1000)/1000)
      if (seconds < 60) 
        return `${seconds} seconds ago`
      const leftoverSeconds = seconds % 60
      const minutes = Math.floor(seconds / 60)
      if (minutes < 60) 
        return `${minutes} minutes and ${leftoverSeconds} seconds ago`
      const leftoverMinutes = minutes % 60
      const hours = Math.floor(minutes / 60)
      if (hours < 24) 
        return `${hours} hours and ${leftoverMinutes} minutes ago`
      const leftoverHours = hours % 24
      const days = Math.floor(hours / 24)
      if (days < 7) 
        return `${days} days and ${leftoverHours} hours ago`
      const leftoverDays = days % 7
      const weeks = Math.floor(days / 7)
      if (days < 365) 
        return `${weeks} weeks and ${leftoverDays} days ago`
      const years = Math.round(days / 365)
      return years + " years ago"
    }
  return (<>
    <div className='catcard'>
      <div className='overflow-auto w-auto h-auto'>
        <h1 className='font-bold text-center mb-3'>Cat detection log</h1>
        <ul>
            {detections.map(d => 
            <li className='list-item mb-5 rounded-md cursor-pointer bg-secondary w-100  text-white' key={d.id}>
                <button onClick={() => handleDetectionPreview(d.id)} className='w-full hover:shadow-md'>
                    {secondsToElapsedTime(d.detectedAt)}
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