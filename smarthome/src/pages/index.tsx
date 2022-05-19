import { Content } from '../components/Content'
import StoreProvider from './Store'
const Home = () => {
  return <StoreProvider>
    <Content />  
  </StoreProvider>    
}

export default Home
