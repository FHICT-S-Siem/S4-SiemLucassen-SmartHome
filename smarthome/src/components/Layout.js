import { SideBar } from '../components/SideBar'
import { TopBar } from '../components/TopBar'

const Layout = ({children}) => (
    <div className='flex'>
        <TopBar />
        <div className='flex flex-row'>
            <div className='content'>
                <div className='m-2 flex flex-col'>
                    {children}
                </div>
            </div>
            <SideBar />
        </div>
    </div>
)

export default Layout