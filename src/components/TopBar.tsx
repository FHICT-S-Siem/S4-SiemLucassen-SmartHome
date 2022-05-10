import React, {useState, useEffect} from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { FaSun, FaMoon } from 'react-icons/fa'

interface TopBarProps {

}

export const TopBar: React.FC<TopBarProps> = ({}) => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 5000);
  }, []);
        return (
          <div className='topbar'>
              <SmartHomeIcon />
                <div className='flex flex-row flex-end'>
                <ThemeIcon />
                  <p className='mr-5'>
                    {dateState.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                  </p>
                  <p>
                    {dateState.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    })}
                  </p>
                </div>               
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