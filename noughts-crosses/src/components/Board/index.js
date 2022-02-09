import React from 'react'
import { Square } from '../square'

const style = {
	border: "4px solid darkblue",
	borderRadius: "10px",
	width: "250px",
	height: "250px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

export const Board = ({ squares, onClick }) => (
	<div style={style}>
		{squares.map((square, i) => (
			<Square key={i} value={square} onClick={() => onClick(i)} />
		))}
	</div>
);

// export const Board = ({ handleClick, move}) => {

//   return (
//       <div>
//     <Square id="1" onClick={handleClick} move={move}/>
//     <Square id="2" onClick={handleClick} move={move}/>
//     <Square id="3" onClick={handleClick} move={move}/>
//     <Square id="4" onClick={handleClick} move={move}/>
//     <Square id="5" onClick={handleClick} move={move}/>
//     <Square id="6" onClick={handleClick} move={move}/>
//     <Square id="7" onClick={handleClick} move={move}/>
//     <Square id="8" onClick={handleClick} move={move}/>
//     <Square id="9" onClick={handleClick} move={move}/>
//     </div>
//   )
// }
