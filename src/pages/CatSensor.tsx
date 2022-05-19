import React, {FC} from 'react'
import Image from 'next/image'

interface CatSensorProps {
  id: number
  objects: {
    id: number,
    catDetection: CatSensorProps
    objId: number,
    xMin: number
    yMin: number
    xMax: number
    yMax: number
    confidence: number
  }[]
  detectedAt: string
  image: string
}

const CatSensor: FC<CatSensorProps>  = (props) => {
  const {id, objects, detectedAt, image} = props

  return (
  <div className="flex flex-row">
    <div className='catcard'>
      <div className='overflow-auto w-44 h-96'>
        <h1 className='font-bold text-center mb-3'>Cat detection log</h1>
        <ul>
          <li className='list-item mb-5 rounded-md bg-secondary w-100  text-white'>
            <p className='text-center'>
              10 May 2022
            </p>
          </li>
          <li className='list-disc mb-5 rounded-md bg-blue-500 w-100 text-white'>
            <p className='text-center'>
              9 May 2022
            </p>
          </li>    
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              8 May 2022
            </p>
          </li>    
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              7 May 2022
            </p>
          </li>    
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              7 May 2022
            </p>
          </li> 
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              7 May 2022
            </p>
          </li>  
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              7 May 2022
            </p>
          </li> 
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              7 May 2022
            </p>
          </li> 
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              7 May 2022
            </p>
          </li> 
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              7 May 2022
            </p>
          </li> 
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              7 May 2022
            </p>
          </li> 
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              7 May 2022
            </p>
          </li> 
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              7 May 2022
            </p>
          </li> 
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              7 May 2022
            </p>
          </li> 
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              7 May 2022
            </p>
          </li> 
          <li className='list-disc mb-5 rounded-md bg-secondary w-100 text-white'>
            <p className='text-center'>
              7 May 2022
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

export default CatSensor