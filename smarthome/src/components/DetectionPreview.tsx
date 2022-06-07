import React, { FC, useContext } from 'react'

import { Context } from '../pages/Store'

const DetectionPreview = () => {
  const store = useContext(Context)
  
  return (
    <div className='catcard'>        
      <p>Detected at: 
        {console.log(store.state.detections)}
        {/* {store.state.detections?.map(d => 
        <div key={d.id}>{d.detectedAt}</div>)} */}
      </p>
    </div>
  )
}

export default DetectionPreview