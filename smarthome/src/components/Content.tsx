import React from 'react'
import Analytics from '../pages/Analytics';
import CatSensor from '../pages/CatSensor';
import Room from '../pages/Room';

interface ContentProps {
}

export const Content: React.FC<ContentProps> = ({}) => {
        return ( 
            <>
                <Analytics />
                <Room />                 
            </>      
        );
}

export default Content