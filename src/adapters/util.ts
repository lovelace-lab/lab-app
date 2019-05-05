import { sha256 } from 'js-sha256'

export const createHash = (data: string | Buffer) => {
  return sha256(data)
}

export const generateRandomId = () => {
  const ar: number[] = []
  for (let i = 0; i < 2048; i++) {
    ar.push(Math.random() * 256)
  }
  return sha256(ar)
}
