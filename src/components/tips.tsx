import React, { useState, useCallback } from "react";
import { addTips } from '../domains/tips';
import { createTipsLocalStorage } from '../adapters/local-storage'

const Tips: React.FC = () => {
  const [value, setValue] = useState('aaaa')
  function handleChange(text: string) {
    setValue(text)
  }

  const handleSubmit = useCallback((event: React.FormEvent) => {
    const tipsRepositoryPort = createTipsLocalStorage();
    addTips(tipsRepositoryPort, value)
    event.preventDefault()
  }, [value])

  return <form onSubmit={handleSubmit}>
    <input type="text" value={value} onChange={e => handleChange(e.target.value)} />
    <input type="submit" value="add" />
  </form>
};

export default Tips;
