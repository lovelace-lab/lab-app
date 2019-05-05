import {
  createData,
  updateData,
  fetchDataHistories,
  changeDataCheckpoint
} from "./data";

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

describe("fetchDataHistories", () => {
  test("offsetとmaxを省略", async () => {
    const id = "hoge";
    const createdAt = new Date(0);
    const updatedAt = new Date(1);

    const fetchHistories = jest.fn().mockImplementation(() => {
      return Promise.resolve([
        {
          id,
          createdAt,
          updatedAt,
          metadata: { hoge: "hoge" }
        }
      ]);
    });

    const setHistories: any = jest.fn();

    await fetchDataHistories({ fetchHistories, setHistories }, id);
    expect(fetchHistories.mock.calls.length).toBe(1);
    expect(fetchHistories.mock.calls[0]).toEqual([id, undefined, undefined]);
    expect(setHistories.mock.calls.length).toBe(1);
    expect(setHistories.mock.calls[0][0]).toEqual([
      {
        id,
        createdAt,
        updatedAt,
        metadata: { hoge: "hoge" }
      }
    ]);
  });
});

describe("changeDataCheckpoint", () => {
  test("", async () => {
    const id = "hoge";
    const checkpointId = "fuga";

    const changeByCheckpoint = jest.fn();
    await changeDataCheckpoint({ changeByCheckpoint }, id, checkpointId);
    expect(changeByCheckpoint.mock.calls.length).toBe(1);
    expect(changeByCheckpoint.mock.calls[0][0]).toEqual(id);
    expect(changeByCheckpoint.mock.calls[0][1]).toEqual(checkpointId);
  });
});
