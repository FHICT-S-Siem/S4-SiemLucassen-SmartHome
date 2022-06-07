interface DetectionProps {
  id: number
  objects: {
    id: number,
    detection: DetectionProps
    objectId: number
    xMin: number
    yMin: number
    xMax: number
    yMax: number
    confidence: number
    type: string
  }[]
  detectedAt: string
  image: string
}

export { type DetectionProps }