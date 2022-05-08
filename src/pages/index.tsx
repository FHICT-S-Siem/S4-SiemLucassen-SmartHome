import { CatSensor } from '../components/CatSensor'
import { json } from 'stream/consumers'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
        <Head>          
        </Head>
        <CatSensor detectedAt='tien jaar'/>                
    </div>
  )
}

export default Home
