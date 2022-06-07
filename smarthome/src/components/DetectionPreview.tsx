import React, { FC, useContext } from 'react'
import Image from 'next/image'

import { Context } from '../pages/Store'

const DetectionPreview = () => {
  const store = useContext(Context)
  
  return (
    <div className='catcard'>        
      <p>Detected at: {store.state.detections}</p>
    </div>
  )
}

export default DetectionPreview