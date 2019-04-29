import { createTipsLocalStorage } from "./local-storage";

describe("save", () => {
  test("ローカルストレージにtips-<ID>でメッセージが格納される", () => {
    const tipsLocalStorage = createTipsLocalStorage();
    tipsLocalStorage.save("ID", "hoge");
    expect(localStorage.getItem("tips-ID")).toBe("hoge");
  });
});
