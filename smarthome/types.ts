export interface GetDetectionResults {
    results: Detection[]
}

export interface Detection {
    id: number;
    objects: {
        id: number
        detection: Detection
        objectId: number
        xMin: number
        yMin: number
        xMax: number
        yMax: number
        confidence: number
    }[]
    detectedAt: string
    picture: string
}
