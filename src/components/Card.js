import React from "react";

function Card({ id, desc, listObjectId, delCardhandler }) {
	return (
		<div className="Card">
			<p>{desc}</p>
			<button
				onClick={() => {
					delCardhandler(listObjectId, id);
				}}
			>
				x
			</button>
		</div>
	);
}

export default Card;
