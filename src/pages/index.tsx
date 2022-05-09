import { CatSensor } from '../components/CatSensor'
import { json } from 'stream/consumers'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { SideBar } from '../components/SideBar'
import { TopBar } from '../components/TopBar'

const Home = () => {
  return (
    <div className='flex'>
        <TopBar />
        <SideBar />    
    </div>
  )
}

export default Home
