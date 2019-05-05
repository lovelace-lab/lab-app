import { SearchParamFilter, SearchParamOrder } from "./search";

export type Serializable =
  | string
  | Buffer
  | number
  | Date
  | {
      [props: string]: Serializable | Serializable[];
    };

export interface Data<T extends Serializable, U extends Serializable> {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  payload?: T;
  metadata?: U;
}

export interface History<T extends Serializable> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  metadata: T;
}

export interface DataRepositoryPort<
  T extends Serializable,
  U extends Serializable
> {
  create: (payload: T, metadata: U) => Promise<void>;

  update: (id: string, payload: T, metadata: U) => Promise<void>;

  changeByCheckpoint: (id: string, checkpointId: string) => Promise<void>;

  fetchHistories: (
    id: string,
    offset?: number,
    max?: number
  ) => Promise<History<U>[]>;

  search: (
    filter: SearchParamFilter,
    order: SearchParamOrder
  ) => Promise<Data<T, U>[]>;
}

export interface DataPresentationPort<
  T extends Serializable,
  U extends Serializable
> {
  setHistories: (histories: History<U>[]) => void;
  setDataSingle: (data: Data<T, U>) => void;
  setDataArray: (data: Data<T, U>[]) => void;
}

type TuppleToUnion<T> = T extends (infer U)[] ? U : never;

type Port<
  T extends Serializable,
  U extends Serializable,
  K extends Array<keyof (DataRepositoryPort<T, U> & DataPresentationPort<T, U>)>
> = Pick<
  DataRepositoryPort<T, U> & DataPresentationPort<T, U>,
  TuppleToUnion<K>
>;

export const createData = async <
  T extends Serializable,
  U extends Serializable,
  P extends Port<T, U, ["create"]>
>(
  { create }: P,
  payload: T,
  metadata: U
) => {
  await create(payload, metadata);
};

export const updateData = async <
  T extends Serializable,
  U extends Serializable,
  P extends Port<T, U, ["update"]>
>(
  { update }: P,
  id: string,
  payload: T,
  metadata: U
) => {
  await update(id, payload, metadata);
};

export const fetchDataHistories = async <
  T extends Serializable,
  U extends Serializable,
  P extends Port<T, U, ["fetchHistories", "setHistories"]>
>(
  { fetchHistories, setHistories }: P,
  id: string,
  offset?: number,
  max?: number
) => {
  const histories = await fetchHistories(id, offset, max);
  await setHistories(histories);
};

export const changeDataCheckpoint = async <
  T extends Serializable,
  U extends Serializable,
  P extends Port<T, U, ["changeByCheckpoint"]>
>(
  { changeByCheckpoint }: P,
  id: string,
  checkpointId: string
) => {
  await changeByCheckpoint(id, checkpointId);
};
