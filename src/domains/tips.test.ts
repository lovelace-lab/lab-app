import { createTips, TipsPort } from "./tips";

describe("createTips", () => {
  test("IDが生成されて、saveされる", () => {
    const save = jest.fn()
    const tipsPort: TipsPort = {
      save,
      findAll: jest.fn(),
      findById: jest.fn()
    };
    createTips(tipsPort);
    expect(save.mock.calls.length).toBe(1);
    expect(save.mock.calls[0][0]).toBe('hoge');
    expect(save.mock.calls[0][1]).toBe('');
  });
});
