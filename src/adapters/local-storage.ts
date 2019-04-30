import { TipsRepositoryPort } from "../domains/tips";

export const createTipsLocalStorage = (): TipsRepositoryPort => {
  const save: TipsRepositoryPort["save"] = async (id, message) => {
    localStorage.setItem(`tips-${id}`, message);
  };
  const findById = async () => ({ id: "dummy", message: "dummy" });
  const findAll = async () => [];
  return { save, findAll, findById };
};
