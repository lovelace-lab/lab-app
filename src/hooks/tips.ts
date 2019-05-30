import { useState, useEffect } from "react";
import { TipsPort, fetchAllTips, Tips } from "../domains/tips";
import { createTipsLocalStorage } from "../adapters/local-storage";

export const useTipsInput = () => {};

export const useTipsList = () => {
  const [allTips, setAllTips] = useState<Tips[]>([]);
  useEffect(() => {
    const tipsPort: TipsPort = {
      setAllTips: tipses => {
        setAllTips(tipses);
      }
    };
    const tipsRepositoryPort = createTipsLocalStorage();
    fetchAllTips(tipsRepositoryPort, tipsPort);
  }, []);
  return { allTips };
};
