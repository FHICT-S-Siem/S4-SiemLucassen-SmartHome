export interface GetDetectionResults {
    results: Detection[]
}

export interface Detection {
    id: number
    objects: {
        id: number,
        objId: number
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
