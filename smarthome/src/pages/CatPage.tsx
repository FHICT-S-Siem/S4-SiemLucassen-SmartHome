import React, {FC, useContext, useEffect, useState} from 'react'
import Image from 'next/image'
import { Context } from "./Store"
import CatDetection from '../components/CatDetection'


const CatPage = () => {
  const store = useContext(Context)

	useEffect(() => {
	  	fetch('/api/detection')
		  	.then(res => res.json())
			.then((data) => 
				store.dispatch({type: "setCatDetections", payload: data})
			)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
  return <>
      {store.state.catDetections?.map(cD => <CatDetection key={cD.id} {...cD}/>)}
    </>
  
}

export default CatPage