import React from 'react'

export const Square = ({ value, onClick }) => (
	<button style={style} onClick={onClick}>
		{value}
	</button>
);

// export const Square = ({id, handleClick, move}) => {
//   return (
//     <div>
//         <button id={id} onClick={handleClick}>{move}</button>
//     </div>
//   )
// }
