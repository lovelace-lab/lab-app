import React, { useState, useCallback, useEffect } from "react";
import {css} from '@emotion/core'

import { addTips, fetchAllTips, Tips, TipsPort } from '../domains/tips';
import { createTipsLocalStorage } from '../adapters/local-storage'

const buttonStyle = css`
  background-color: #333;
  color: #eee;
`

const TipsComponent: React.FC = () => {
  const [value, setValue] = useState('')
  const [allTips, setAllTips] = useState<Tips[]>([])
  function handleChange(text: string) {
    setValue(text)
  }

  useEffect(() => {
    const tipsPort: TipsPort = {
      setAllTips: (tipses) => {
        setAllTips(tipses);
      }
    }
    const tipsRepositoryPort = createTipsLocalStorage();
    fetchAllTips(tipsRepositoryPort, tipsPort);
  }, [])

  const handleSubmit = useCallback((event: React.FormEvent) => {
    const tipsRepositoryPort = {
      create: (payload: any, metadata: any) => {
        console.log(payload)
        console.log(metadata)
      }
    }
    addTips(tipsRepositoryPort, value)
    event.preventDefault()
  }, [value])

  return <>
    <form onSubmit={handleSubmit}>
    <input type="text" value={value} onChange={e => handleChange(e.target.value)} />
    <input type="submit" value="add" css={buttonStyle} />
  </form>
  <ul>
    {
      allTips.map(tips => <li>{tips.message}</li>)
    }
  </ul>
  </>
};

export default TipsComponent;
