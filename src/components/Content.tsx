import React from 'react'
import Analytics from '../pages/Analytics';
import CatSensor, {CatSensorProps} from '../pages/CatSensor';
import Room from '../pages/Room';

interface ContentProps {
    catDetections: CatSensorProps[]
}

export const Content: React.FC<ContentProps> = ({catDetections}) => {
        return ( 
            <>
                {catDetections.map(cD => <CatSensor key={cD.id} {...cD}/>)}
                <Analytics />
                <Room />                 
            </>      
        );
}

export default Content