export interface History {
  metadataId: string;
  blobId: string;
  userId: string;
  at: Date;
  comment: string;
}

export const createHistory = (
  metadataId: string,
  blobId: string,
  userId: string,
  comment: string = ""
): History => {
  return {
    metadataId,
    blobId,
    userId,
    at: new Date(),
    comment
  };
};
