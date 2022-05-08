import type { NextPage } from 'next'
import { CatSensor } from '../components/CatSensor'

const Home: NextPage = () => {
  return (
    <div>
        <CatSensor detectedAt='tien jaar'/>
    </div>
  )
}

export default Home
