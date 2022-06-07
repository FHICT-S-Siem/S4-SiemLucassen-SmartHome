import React, { FC, useContext } from 'react'

import { Context } from '../pages/Store'

const DetectionPreview = () => {
  const store = useContext(Context)
  {console.log(store.state)}
  return (
    
    <div className='catcard'>        
        <p>Detected at:</p> 
        {store.state.detections?.map(d => <div key={d.id}>
          {d.id} <br></br>
          {d.detectedAt}
          {d.objects.map(o => 
            <p key={o.id}>{o.confidence} {o.type}</p>
          )}</div>
        )}
    </div>
  )
}

export default DetectionPreview