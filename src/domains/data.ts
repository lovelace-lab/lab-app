import { Filter, Order } from "./search";
import { DataRepositoryPort } from "./data-repository-port";
import { DataPresentationPort } from "./data-presentation-port";

type SerializableType = string | Buffer | number | Date;
export type Serializable = SerializableType | {
  [props: string]:
    | Serializable
    | Serializable[];
};

export interface Data<T extends Serializable> {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  payload?: T;
}

export interface Metadata {
  id: string;
  blobId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

type TuppleToUnion<T> = T extends (infer U)[] ? U : never;

type Port<
  T extends Serializable,
  K extends Array<keyof (DataRepositoryPort<T> & DataPresentationPort<T>)>
> = Pick<
  DataRepositoryPort<T> & DataPresentationPort<T>,
  TuppleToUnion<K>
>;

/**
 * create new data on repository
 */
export const createData = async <
  T extends Serializable,
>(
  port: Port<T, ["create"]>,
  payload: T
) => {
  await port.create(payload);
};

/**
 * update data on repository
 */
export const updateData = async <
  T extends Serializable,
>(
  port: Port<T, ["update"]>,
  id: string,
  payload: T
) => {
  await port.update(id, payload);
};

/**
 * fetch histories
 */
export const fetchHistories = async <
  T extends Serializable
>(
  port: Port<T, ["fetchHistories", "setHistories"]>,
  id: string,
  offset?: number,
  max?: number
) => {
  const histories = await port.fetchHistories(id, offset, max);
  await port.setHistories(histories);
};

export const changeDataByCheckpoint = async <
  T extends Serializable,
>(
  port: Port<T, ["changeDataByCheckpoint"]>,
  id: string,
  checkpointId: string
) => {
  await port.changeDataByCheckpoint(id, checkpointId);
};

export const searchData = async <
  T extends Serializable,
>(
  port: Port<T, ["search", "setDataArray"]>,
  filters: Filter[],
  orderes: Order[]
) => {
  const data = await port.search(filters, orderes)
  await port.setDataArray(data)
}