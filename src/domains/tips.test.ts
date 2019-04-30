import { addTips, TipsRepositoryPort, TipsPort, fetchAllTips } from "./tips";

describe("addTips", () => {
  test("IDが生成されて、saveされる", () => {
    const save = jest.fn();
    const tipsPort: TipsRepositoryPort = {
      save,
      findAll: jest.fn(),
      findById: jest.fn()
    };
    addTips(tipsPort, "fugafuga");
    expect(save.mock.calls.length).toBe(1);
    expect(save.mock.calls[0][0]).toBe("hoge");
    expect(save.mock.calls[0][1]).toBe("fugafuga");
  });
});

describe("fetchAllTips", () => {
  test("すべてのTipsを取得してTipsPortにセットする", async () => {
    const expectValue = [{
      id: "hoge",
      message: "fuga"
    }];
    const findAll = jest.fn().mockImplementation(() => {
      return expectValue
    });
    const tipsRepositoryPort: TipsRepositoryPort = {
      save: jest.fn(),
      findAll,
      findById: jest.fn()
    }
    const setAllTips = jest.fn();
    const tipsPort: TipsPort = {
      setAllTips
    }
    
    await fetchAllTips(tipsRepositoryPort, tipsPort);
    expect(setAllTips.mock.calls.length).toBe(1);
    expect(setAllTips.mock.calls[0][0]).toEqual(expectValue);
  })
})