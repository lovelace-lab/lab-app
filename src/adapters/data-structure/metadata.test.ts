import { advanceTo } from "jest-date-mock";
import { mockRandom } from "jest-mock-random";

import { createMetadata, updateMetadata } from "./metadata";

test("createMetadata", () => {
  const date = new Date(100000);
  advanceTo(100000);
  mockRandom([0.1, 0.2, 0.3]);
  const blobId =
    "ecb666d778725ec97307044d642bf4d160aabb76f56c0069c71ea25b1e926825";
  expect(createMetadata("hoge", { id: blobId } as any)).toEqual({
    id: "cd74353bc67bf7e4c2457790708c429ee60e0bf6e83bbf60bfab28b422ea71aa",
    type: "hoge",
    blobId,
    createdAt: date,
    updatedAt: date
  });
});

test("updateMetadata", () => {
  const createdAt = new Date(100000);
  const updatedAt = new Date(200000);
  advanceTo(200000);

  const metadata = {
    id: "cd74353bc67bf7e4c2457790708c429ee60e0bf6e83bbf60bfab28b422ea71aa",
    type: "hoge",
    blobId: "ecb666d778725ec97307044d642bf4d160aabb76f56c0069c71ea25b1e926825",
    createdAt,
    updatedAt: createdAt
  };
  expect(updateMetadata(metadata, { id: 'newId' } as any)).toEqual({
    id: "cd74353bc67bf7e4c2457790708c429ee60e0bf6e83bbf60bfab28b422ea71aa",
    type: "hoge",
    blobId: "newId",
    createdAt,
    updatedAt
  });
});
