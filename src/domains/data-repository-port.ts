import { Filter, Order } from "./search";
import { Serializable, Metadata, Data } from "./data";

export interface DataRepositoryPort<T extends Serializable> {
  create: (payload: T) => Promise<void>;
  update: (id: string, payload: T) => Promise<void>;
  changeDataByCheckpoint: (id: string, blobId: string) => Promise<void>;
  fetchHistories: (id: string, offset?: number, max?: number) => Promise<Metadata[]>;
  search: (filter: Filter[], order: Order[]) => Promise<Data<T>[]>;
}
