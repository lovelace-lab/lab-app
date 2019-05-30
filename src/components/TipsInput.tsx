import React, { useState, useCallback, useEffect } from "react";
import { addTips, fetchAllTips, Tips, TipsPort } from "../domains/tips";
import { createTipsLocalStorage } from "../adapters/local-storage";
import { useTipsList } from "../hooks/tips";

const TipsComponent: React.FC = () => {
  const [value, setValue] = useState("");
  const { allTips } = useTipsList();

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => handleChange(e.target.value)}
        />
        <input type="submit" value="add" />
      </form>
      <ul>
        {allTips.map(tips => (
          <li>{tips.message}</li>
        ))}
      </ul>
    </>
  );
};

export default TipsComponent;
