import React from 'react'
import { Square } from '../square'

export const Board = ({id, handleClick}) => {

  return (
      <div>
      <div>
    <Square id={id} onClick={handleClick}/>
    <Square id={id} onClick={handleClick}/>
    <Square id={id} onClick={handleClick}/>
    </div>
    <div>
    <Square id={id} onClick={handleClick}/>
    <Square id={id} onClick={handleClick}/>
    <Square id={id} onClick={handleClick}/>
    </div>
    <div>
    <Square id={id} onClick={handleClick} />
    <Square id={id} onClick={handleClick}/>
    <Square id={id} onClick={handleClick}/>
    </div>
</div>
  )
}
