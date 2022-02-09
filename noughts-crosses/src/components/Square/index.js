import React from 'react'

export const Square = ({id, handleClick, move}) => {
  return (
    <div>
        <buttom id={id} onClick={handleClick}>{move}</buttom>
    </div>
  )
}
