import React, { useState, useEffect } from "react";
import List from "./List";
function ListContainer({
	trelloListObjs,
	addNewTrelloList,
	delCardhandler,
	addNewCard,
	delTrelloList,
}) {
	const [addListInputState, setAddListInput] = useState("");

	const addListInputHandler = (e) => {
		if (e.keyCode === 13) {
			setAddListInput("");
			addNewTrelloList(addListInputState);
			return;
		}

		setAddListInput(e.target.value);
	};
	const listToRender = trelloListObjs.map((list, i) => {
		return (
			<List
				addNewCardHandler={addNewCard}
				id={list.id}
				key={list.id}
				title={list.title}
				cards={list.cards}
				listIndex={i}
				delCardhandler={delCardhandler}
				delTrelloList={delTrelloList}
			/>
		);
	});

	return (
		<div className="ListContainer">
			{listToRender}
			<div className="addList">
				<input
					onKeyDown={(e) => addListInputHandler(e)}
					onChange={(e) => addListInputHandler(e)}
					value={addListInputState}
					placeholder="add list"
				></input>
				<button
					onClick={() => {
						setAddListInput("");
						addNewTrelloList(addListInputState);
					}}
				>
					+
				</button>
			</div>
		</div>
	);
}

export default ListContainer;
