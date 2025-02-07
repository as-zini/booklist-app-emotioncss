//이 부분은 css프롭으로 
/** @jsxImportSource @emotion/react */


import { css } from '@emotion/react'
import React from 'react'

const Footer = ({isDark, setIsDark}) => {
  return (
    <div
      css={css`
        margin: 1rem 0;
        display: flex;
        justify-content:center;
      `}
    >
      <p>
        Book List Inc, All rights reserved.
      </p>
      <button
        css={css`
        background-color: #FCFCFD;
        color: #36395A;
        border: 1px solid rgba(34, 35, 38. .5);
        padding: .6rem 1.5rem;
        margin-left: 15px;
        border-radius: 3px;
        cursor: pointer;

        &:hover{
          transform: translateY(-2px);
        }
        
        `}
        onClick={() => setIsDark(!isDark)}
      >{isDark ? "Dark" : "Light"}</button>
    </div>
  )
}

export default Footer