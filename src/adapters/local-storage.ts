import { Serializable } from "../domains/data";
import { DataRepositoryPort } from "../domains/data-repository-port";
import { Filter, Order } from "../domains/search";
import { createBlob } from "./data-structure";
import { generateRandomId, createHash } from "./util";

export const createLocalStorage = <
  T extends Serializable
>(): DataRepositoryPort<T> => {
  type Port = DataRepositoryPort<T>

  const create: Port["create"] = async (
    payload: T,
  ) => {
    const blob =
      typeof payload === "string" ? payload : JSON.stringify(payload);
    const blobId = createHash(blob);
    localStorage.setItem(`blob-${blobId}`, blob);
  };

  const update: Port["update"] = async (
    id: string,
    payload: T
  ) => {
    const blob =
      typeof payload === "string" ? payload : JSON.stringify(payload);
    const blobId = createHash(blob);
    localStorage.setItem(`blob-${blobId}`, blob);
  };

  const changeDataByCheckpoint: Port["changeDataByCheckpoint"] = async (id: string, blobId: string) => {};

  const fetchHistories: Port["fetchHistories"] = async (
    id: string,
    offset?: number,
    max?: number
  ) => {
    return [];
  };

  const search: Port["search"] = async (
    filters: Filter[],
    orders: Order[]
  ) => {
    /*
    const keys = Object.keys(localStorage).filter(key =>
      key.startsWith(TIPS_PREFIX)
    );
    const results: Tips[] = keys.map(key => ({
      id: key.substring(TIPS_PREFIX.length),
      message: localStorage.getItem(key) || ""
    }));
    return results;
*/
    return [];
  };

  return { create, update, changeDataByCheckpoint, fetchHistories, search };
};
