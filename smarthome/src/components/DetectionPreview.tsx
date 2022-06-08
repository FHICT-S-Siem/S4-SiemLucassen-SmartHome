import React, { FC, useContext } from 'react'

import { Context } from '../pages/Store'

  const DetectionPreview = () => {
  const store = useContext(Context)
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
  return (
    
    <div className='catcard'>        
      <h1 className='font-bold text-center mb-3'>Cat Preview</h1>
      {store.state.detections?.map(d => 
      <div key={d.id}>
        id: {d.id} <br></br>
        Detected at:  {secondsToElapsedTime(d.detectedAt)}
        
          {d.objects.map(o => 
            <p key={o.id}>
            confidence:  {o.confidence} <br></br>
            type:{o.type}</p>
          )}

      Image: {d.image}
      </div>)}
    </div>
  )
}

export default DetectionPreview