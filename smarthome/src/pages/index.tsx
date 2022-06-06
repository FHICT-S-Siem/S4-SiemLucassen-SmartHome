import { prisma } from "../../lib/prisma"
import dynamic from "next/dynamic"
import { DetectionProps } from "../components/Detection"

const CatPage = dynamic(() => import("../pages/CatPage"), { ssr:false})

export async function getServerSideProps() {
  const detections = await prisma.detection.findMany({
    select: {
      id: true,
      objects: true,
      detectedAt: true,
      image: false
    }
  })
  return { props: { detections } } // will be passed to the page component as props
}

const Home: React.FC<{detections: DetectionProps[]}> = ({detections}) => {
  return <>
    <CatPage detections={detections}/>
  </>
}

export default Home
