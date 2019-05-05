import { generateRandomId } from '../util'
import { Blob } from './blob'

export interface Metadata {
  id: string
  type: string
  blobId: string
  createdAt: Date
  updatedAt: Date
}

export const createMetadata = (type: string, blob: Blob): Metadata => {
  const now = new Date()
  return {
    id: generateRandomId(),
    type,
    blobId: blob.id,
    createdAt: now,
    updatedAt: now
  }
}

export const updateMetadata = (metadata: Metadata, blob: Blob): Metadata => {
  return {
    ...metadata,
    blobId: blob.id,
    updatedAt: new Date()
  }
}
