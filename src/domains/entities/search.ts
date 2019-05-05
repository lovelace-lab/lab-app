export interface Filter {
  key: string
  word: string
  exclude?: boolean
}

export interface Order {
  key: string
  asc: boolean
}

export interface SearchParamFilter {
  filters: Filter[]
}

export interface SearchParamOrder {
  orders: Order[]
}

export const createSearchParamFilter = (filters: Filter[] = []): SearchParamFilter => {
  return { filters }
}

export const createSearchParamOrder = (orders: Order[] = []): SearchParamOrder => {
  return { orders }
}
