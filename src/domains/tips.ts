import { createData, searchData, updateData } from "./data";

export const addTips = (port: any, message: string) => {
  createData(port, message)
}

export const fetchAllTips = (port: any) => {
  searchData(port, [], [])
}

export const updateTips = (port: any, id: string, message: string) => {
  updateData(port, id, message)
}
