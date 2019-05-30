import { useState, useEffect, useCallback } from "react";
import { addTips } from "../domains/tips";

import { TipsPort, fetchAllTips, Tips } from "../domains/tips";
import { createTipsLocalStorage } from "../adapters/local-storage";

export const useTipsInput = () => {
  const [value, setValue] = useState("");
  function handleChange(text: string) {
    setValue(text);
  }

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      const tipsRepositoryPort = createTipsLocalStorage();
      addTips(tipsRepositoryPort, value);
      event.preventDefault();
    },
    [value]
  );

  return { value, handleChange, handleSubmit };
};

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
