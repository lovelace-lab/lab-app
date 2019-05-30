import React from "react";

import { useTipsInput, useTipsList } from "../hooks/tips";

const TipsComponent: React.FC = () => {
  const { value, handleChange, handleSubmit } = useTipsInput();
  const { allTips } = useTipsList();

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
    </>
  );
};

export default TipsComponent;
