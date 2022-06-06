import React, { FC } from 'react'
import Detection, { DetectionProps } from '../components/Detection'

const CatPage: FC<{ detections: DetectionProps[] }> = ({ detections }) => (
 	<>
	 	{detections?.map(d => <Detection key={d.id} {...d} />)}
    </>
)

export default CatPage