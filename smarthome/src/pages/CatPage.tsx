import React, { FC } from 'react'
import { prisma } from '../../lib/prisma'
import { DetectionProps } from "../components/Detection"
import DetectionLog from '../components/DetectionLog'
import DetectionPreview from '../components/DetectionPreview'
import LiveStream from '../components/LiveStream'
import StoreProvider from "./Store"

export async function getServerSideProps() {
	let detections = await prisma.detection.findMany({
	  select: {
		id: true,
		objects: true,
		detectedAt: true,
		image: false
	  }
	})
	detections = detections.sort((a: { detectedAt: number }, b: { detectedAt: number }) => b.detectedAt - a.detectedAt)
	return { props: { detections } }// will be passed to the page component as props
}

const CatPage: FC<{ detections: DetectionProps[] }> = ({ detections }) => {
  return <StoreProvider>
	<div className="flex flex-row flex-wrap">
		<DetectionLog detections={detections}/>
		<DetectionPreview />
		<LiveStream />
	</div>
  </StoreProvider>
}

export default CatPage
