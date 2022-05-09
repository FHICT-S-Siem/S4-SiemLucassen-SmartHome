import React from 'react'

interface CatSensorProps {
	detectedAt: string
}	

export const CatSensor: React.FC<CatSensorProps> = ({detectedAt}) => {
        return (
			<div className="text-center text-blue-400">
				<h1>{detectedAt}</h1>
			</div>
		);
}