import React from 'react'
import { FaCat } from 'react-icons/fa'
import { SiSimpleanalytics } from 'react-icons/si'
import { ImPower } from 'react-icons/im'
import Link from 'next/link'
interface SideBarProps {

}

export const SideBar: React.FC<SideBarProps> = ({}) => {
        return (
            <div className='sidebar'>
                <Link href={'/CatSensor'}><a><SideBarIcon icon = {<FaCat size="28" />} text = 'Catsensor' /></a></Link>
                <Link href={'/Room'}><a><SideBarIcon icon = {<ImPower size="28" />} text = 'Rooms'/></a></Link>
                <Link href={'/Analytics'}><a><SideBarIcon icon = {<SiSimpleanalytics size="28" />} text = 'Analytics' /></a></Link>
            </div>
        );
}

const SideBarIcon: any = ({ icon, text }: any) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}  
        </span>
    </div>
)