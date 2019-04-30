import React, { useState } from "react";
import { addTips } from '../domains/tips';
import { createTipsLocalStorage } from '../adapters/local-storage'

const Tips: React.FC = () => {
  const [value, setValue] = useState('')
  function handleChange(text: string) {
    setValue(text)
  }

  function handleSubmit(event: React.FormEvent) {
    const tipsLocalStorage = createTipsLocalStorage();
    addTips(tipsLocalStorage, value)
    event.preventDefault()
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" value={value} onChange={e => handleChange(e.target.value)} />
    <input type="submit" value="add" />
  </form>
};

export default Tips;
