import Image from 'next/image'
import React, { createRef, FC, useContext } from 'react'

import { Context } from '../pages/Store'

  const DetectionPreview = () => {
  const store = useContext(Context)
	const canvasRef = createRef<HTMLCanvasElement>()

  // const handleImage = async (_image:string) => {
    
	// 	if (!canvasRef.current) return
	// 	const canvas = canvasRef.current
	// 	const context = canvas.getContext('2d')
	// 	if (!context) return
	// 	const image = new Image()
	// 	image.onload = () => {
	// 		canvas.width = image.width;
	// 		canvas.height = image.height;
	// 		context.drawImage(image, 0, 0);
	// 	}
	// 	image.src = 'data:image/png;base64,' + _image

  //   return <canvas ref={canvasRef} className="w-full h-full rounded-t-[15px]"/>
  // }
  const handleImage = (_image:string) => {
    return 'data:image/png;base64,' + _image
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
  return (
    
    <div className='catcard'>        
      <h1 className='font-bold text-center mb-3'>Cat Preview</h1>  

      {store.state.detections?.map(d => <Image key={d.id} alt="detection" src={handleImage(d.image)} width={290} height={250}/>)}      
      {store.state.detections?.map(d => 
      <div key={d.id}>
        Detected {secondsToElapsedTime(d.detectedAt)}  
      </div>)}
    </div>
  )
}

export default DetectionPreview