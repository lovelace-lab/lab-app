import { createBlob } from "./blob";

test("createBlob", () => {
  expect(createBlob("hoge", "text/plain")).toEqual({
    contentType: "text/plain",
    data: "hoge",
    id: "ecb666d778725ec97307044d642bf4d160aabb76f56c0069c71ea25b1e926825"
  });
});
