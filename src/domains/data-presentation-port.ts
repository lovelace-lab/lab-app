import { Serializable, Metadata, Data } from "./data";

export interface DataPresentationPort<T extends Serializable> {
  setHistories: (histories: Metadata[]) => void;
  setDataSingle: (data: Data<T>) => void;
  setDataArray: (data: Data<T>[]) => void;
}
