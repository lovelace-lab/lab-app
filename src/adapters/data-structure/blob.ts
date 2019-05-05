import { createHash } from "../util";

export type ContentType = "text/plain";

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

