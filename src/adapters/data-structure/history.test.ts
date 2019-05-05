import { advanceTo } from "jest-date-mock";

import { createHistory } from "./history";

describe("createHistory", () => {
  test("empty comment", () => {
    advanceTo(100000);
    const at = new Date(100000);

    expect(createHistory("meta", "blob", "hogeta")).toEqual({
      metadataId: "meta",
      blobId: "blob",
      userId: 'hogeta',
      at,
      comment: ""
    });
  });

  test("exists comment", () => {
    advanceTo(100000);
    const at = new Date(100000);

    expect(createHistory("meta", "blob", "fugata", "comment")).toEqual({
      metadataId: "meta",
      blobId: "blob",
      userId: "fugata",
      at,
      comment: "comment"
    });
  });
});
