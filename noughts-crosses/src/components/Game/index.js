import React from 'react'
import { useState } from 'react'
import { Board } from '../Board';
import  Square  from '../square';

export const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    // const [move, setMove] = useState(null);

    const [xIsNext, setXIsNext] = useState(true);


   function handleClick(e){

        if(e.target.value === null){
            if(xIsNext === true){
            move = "X";
            setXIsNext(false);

            }else {
                move = "O";
                setXIsNext(true);
            }
        }else{
            alert("choose another square")

        }
        // if the event.target.value === null then set the value to x or o
        // else alert pick another square
    }
  return (
   <Board handleClick={handleClick} move={move}/>
  )
}
