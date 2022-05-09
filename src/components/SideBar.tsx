import React from 'react'
import { FaCat } from 'react-icons/fa'
import { SiSimpleanalytics } from 'react-icons/si'
import { ImPower } from 'react-icons/im'
interface SideBarProps {

}

export const SideBar: React.FC<SideBarProps> = ({}) => {
        return (
            <div className='sidebar'>
                <SideBarIcon icon = {<FaCat size="28" />} />
                <SideBarIcon icon = {<ImPower size="28" />} />
                <SideBarIcon icon = {<SiSimpleanalytics size="28" />} />
            </div>
        );
}

const SideBarIcon: any = ({ icon, text = 'tooltip' }: any) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}  
        </span>
    </div>
)