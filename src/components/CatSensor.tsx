import React from 'react'

interface CatSensorProps {
	detectedAt: string
}	

export const CatSensor: React.FC<CatSensorProps> = ({detectedAt}) => {
        return (
			<div>
				<h1 className="text-blue-400">{detectedAt}</h1>
			</div>
		);
}