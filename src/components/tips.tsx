import React, {useState} from "react";

const Tips: React.FC = () => {
  const [value, setValue] = useState('')
  function handleChange(text: string) {
    setValue(text)
  }

  return <input type="text" value={value} onChange={e => handleChange(e.target.value)}/>
};

export default Tips;
