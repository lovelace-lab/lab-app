import { TipsRepositoryPort } from "../domains/tips";
import { Tips } from "../domains/tips"

const TIPS_PREFIX = "tips-"

export const createTipsLocalStorage = (): TipsRepositoryPort => {
  const save: TipsRepositoryPort["save"] = async (id, message) => {
    localStorage.setItem(`${TIPS_PREFIX}${id}`, message);
  };
  const findById = async () => ({ id: "dummy", message: "dummy" });
  const findAll: TipsRepositoryPort["findAll"] = async () => {
    const keys = Object.keys(localStorage).filter(key => key.startsWith(TIPS_PREFIX))
    const results: Tips[] = keys.map(key => ({
      id: key.substring(TIPS_PREFIX.length),
      message: localStorage.getItem(key) || ''
    }))
    return results
  };
  return { save, findAll, findById };
};
