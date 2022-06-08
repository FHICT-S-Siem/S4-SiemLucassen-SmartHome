import React, { FC, useContext } from 'react'

import { Context } from '../pages/Store'

const DetectionPreview = () => {
  const store = useContext(Context)
  {console.log(store.state)}
  return (
    
    <div className='catcard'>        
      {store.state.detections?.map(d => 
      <div key={d.id}>
        id: {d.id} <br></br>
        Detected at:  {d.detectedAt}
        
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