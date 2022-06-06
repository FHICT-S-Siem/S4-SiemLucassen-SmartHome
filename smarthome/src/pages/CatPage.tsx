import React, {FC, useContext, useEffect, useState} from 'react'
import Image from 'next/image'
import { Context } from "./Store"
import CatDetection from '../components/Detection'


const CatPage = () => {
  const store = useContext(Context)

	useEffect(() => {
	  	fetch('/api/detection')
		  	.then(res => res.json())
			.then((data) => 
				store.dispatch({type: "setDetections", payload: data})
			)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
  return <>
      {store.state.detections?.map(d => <CatDetection key={d.id} {...d}/>)}
    </>
  
}

export default CatPage