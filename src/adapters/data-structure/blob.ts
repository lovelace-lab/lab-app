import { createHash } from "../util";

export type ContentType = "application/json";

export interface Blob {
  id: string;
  data: string | Buffer;
  contentType: ContentType;
}

export const createBlob = (
  data: string | Buffer,
  contentType: ContentType
): Blob => {
  return {
    id: createHash(data),
    data,
    contentType
  };
};

