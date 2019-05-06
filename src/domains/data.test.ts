import {
  createData,
  updateData,
  fetchHistories,
  changeDataByCheckpoint
} from "./data";

describe("createData", () => {
  test("", async () => {
    const payload = { hoge: "hoge" };
    const create = jest.fn();
    await createData({ create }, payload);
    expect(create.mock.calls.length).toBe(1);
    expect(create.mock.calls[0][0]).toEqual(payload);
  });
});

describe("updateData", () => {
  test("", async () => {
    const payload = { hoge: "hoge" };
    const id = "hoge";
    const update = jest.fn();

    await updateData({ update }, id, payload);
    expect(update.mock.calls.length).toBe(1);
    expect(update.mock.calls[0][0]).toEqual(id);
    expect(update.mock.calls[0][1]).toEqual(payload);
  });
});

describe("fetchDataHistories", () => {
  test("offsetとmaxを省略", async () => {
    const id = "hoge";
    const createdAt = new Date(0);
    const updatedAt = new Date(1);

    const port = {
      fetchHistories: jest.fn(),
      setHistories: jest.fn()
    };
    port.fetchHistories.mockImplementation(() => {
      return Promise.resolve([
        {
          id,
          createdAt,
          updatedAt,
          metadata: { hoge: "hoge" }
        }
      ]);
    });

    await fetchHistories(port, id);
    expect(port.fetchHistories.mock.calls.length).toBe(1);
    expect(port.fetchHistories.mock.calls[0]).toEqual([id, undefined, undefined]);
    expect(port.setHistories.mock.calls.length).toBe(1);
    expect(port.setHistories.mock.calls[0][0]).toEqual([
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
    await changeDataByCheckpoint({ changeDataByCheckpoint: changeByCheckpoint }, id, checkpointId);
    expect(changeByCheckpoint.mock.calls.length).toBe(1);
    expect(changeByCheckpoint.mock.calls[0][0]).toEqual(id);
    expect(changeByCheckpoint.mock.calls[0][1]).toEqual(checkpointId);
  });
});
