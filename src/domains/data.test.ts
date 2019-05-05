import { createData, updateData } from "./data";

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

describe("updateData", () => {
  test("", async () => {
    const payload = { hoge: "hoge" };
    const metadata = { title: "title" };
    const id = "hoge";
    const update = jest.fn();

    await updateData({ update }, id, payload, metadata);
    expect(update.mock.calls.length).toBe(1);
    expect(update.mock.calls[0][0]).toEqual(id);
    expect(update.mock.calls[0][1]).toEqual(payload);
    expect(update.mock.calls[0][2]).toEqual(metadata);
  });
});

