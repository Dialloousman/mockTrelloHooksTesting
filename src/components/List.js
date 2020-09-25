import React, { useState, useEffect } from "react";
import Card from "./Card";

function List({
	id,
	title,
	cards,
	addNewCardHandler,
	listIndex,
	delCardhandler,
	delTrelloList,
}) {
	const [addCardInput, setAddCardInput] = useState("");

	const addCardInputChangeHandler = (e) => {
		if (e.keyCode === 13) {
			setAddCardInput("");
			addNewCardHandler(listIndex, addCardInput);
			return;
		}
		setAddCardInput(e.target.value);
	};

	const cardsToRender = cards.map((card) => {
		return (
			<Card
				delCardhandler={delCardhandler}
				id={card.id}
				key={card.id}
				desc={card.desc}
				listObjectId={id}
			/>
		);
	});

	return (
		<div className="List">
			<span
				onClick={() => {
					delTrelloList(id);
				}}
			>
				X
			</span>
			<h4>{title}</h4>
			{cardsToRender}
			<div className="addCard">
				<input
					onChange={(e) => addCardInputChangeHandler(e)}
					value={addCardInput}
					placeholder="add card"
					onKeyDown={(e) => addCardInputChangeHandler(e)}
				></input>
				<button
					onClick={() => {
						setAddCardInput("");
						addNewCardHandler(listIndex, addCardInput);
					}}
				>
					+
				</button>
			</div>
		</div>
	);
}

export default List;
