import React from 'react'
import useDarkMode from '../hooks/useDarkMode';
import { FaSun, FaMoon } from 'react-icons/fa'

interface TopBarProps {

}

export const TopBar: React.FC<TopBarProps> = ({}) => {
        return (
            <div className='topbar'>
                <SmartHomeIcon />
                <ThemeIcon />
            </div>
        );
}

const SmartHomeIcon: any = () => {
    return(<><h1 className='font-bold  ml-3'>Smart</h1><h1 className='ml-0.5'>Home</h1></>)
}

const ThemeIcon: any = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='topbar-icon' />
        ) : (
          <FaMoon size='24' className='topbar-icon' />
        )}
      </span>
    );
};