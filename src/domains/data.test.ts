import { createData } from "./data";

describe("createData", () => {
  test("", async () => {
    const payload = { hoge: "hoge" };
    const metadata = { title: "title" };
    const create = jest.fn();
    await createData({ create }, payload, metadata);
    expect(create.mock.calls.length).toBe(1);
    expect(create.mock.calls[0][0]).toEqual(payload);
    expect(create.mock.calls[0][1]).toEqual(metadata);
  });
});
