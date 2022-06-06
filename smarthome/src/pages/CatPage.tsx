import React, { FC } from 'react'
import { prisma } from '../../lib/prisma'
import { DetectionProps } from '../components/Detection'
import DetectionLog from '../components/DetectionLog'
import DetectionPreview from '../components/DetectionPreview'

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

const CatPage: FC<{ detections: DetectionProps[] }> = ({ detections }) => (
	<div className="flex flex-row">
		<DetectionLog detections={detections}/>
	</div>
)

export default CatPage