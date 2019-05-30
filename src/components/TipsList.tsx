import React from "react";
import { useTipsList } from "../hooks/tips";

const TipsList: React.FC = () => {
  const { allTips } = useTipsList();
  return (
    <ul>
      {allTips.map(tips => (
        <li key={tips.id}>{tips.message}</li>
      ))}
    </ul>
  );
};

export default TipsList;
