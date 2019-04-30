import { createTipsLocalStorage } from "./local-storage";

describe("save", () => {
  test("ローカルストレージにtips-<ID>でメッセージが格納される", () => {
    const tipsLocalStorage = createTipsLocalStorage();
    tipsLocalStorage.save("ID", "hoge");
    expect(localStorage.getItem("tips-ID")).toBe("hoge");
  });
});

describe("findAll", () => {
  test("ローカルストレージに格納されたメッセージがすべて表示される", () => {
    const tipsLocalStorage = createTipsLocalStorage();
    localStorage.clear()
    localStorage.setItem("tips-hoge", "fuga")
    localStorage.setItem("tops-player", "asakusa")
    localStorage.setItem("tips-lovelive", "honoka")
    expect(tipsLocalStorage.findAll()).resolves.toEqual([
      {
        id: "hoge",
        message: "fuga"
      },
      {
        id: "lovelive",
        message: "honoka"
      }
    ])
  })
})
