import React, { FC } from 'react'
import { prisma } from '../../lib/prisma'
import { DetectionProps } from "../components/Detection"
import DetectionLog from '../components/DetectionLog'
import DetectionPreview from '../components/DetectionPreview'
import StoreProvider from "./Store"

export async function getServerSideProps() {
	const detections = await prisma.detection.findMany({
	  select: {
		id: true,
		objects: true,
		detectedAt: true,
		image: false
	  }
	})
	return { props: { detections } } // will be passed to the page component as props
}

const CatPage: FC<{ detections: DetectionProps[] }> = ({ detections }) => {
  return <StoreProvider>
	<div className="flex flex-row">
		<DetectionLog detections={detections}/>
		<DetectionPreview />
	</div>
  </StoreProvider>
}

export default CatPage
