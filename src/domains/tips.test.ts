import { addTips, TipsRepositoryPort } from "./tips";

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
