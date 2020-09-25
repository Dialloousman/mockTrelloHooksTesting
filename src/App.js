import React, { useState, useEffect } from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";
import BoardNavBar from "./components/BoardNavBar";

function getRandomIdNumber() {
	return Math.floor(Math.random() * 5000);
}

function App() {
	const [trelloListObjs, setTrelloListObjs] = useState([]);

	const addNewTrelloList = (listTitle) => {
		console.log("add new list clickled [App.js]");

		const newTrelloList = {
			id: getRandomIdNumber(),
			title: listTitle,
			cards: [],
		};

		setTrelloListObjs((prevTrelloListState) => {
			const prevTrelloListStateCopy = prevTrelloListState.slice();
			prevTrelloListStateCopy.push(newTrelloList);

			const updatedLists = prevTrelloListStateCopy;

			return updatedLists;
		});
	};

	const delTrelloList = (trelloObjId) => {
		setTrelloListObjs((prevLisState) =>
			prevLisState.filter((list) => list.id !== trelloObjId)
		);
	};

	const addNewCard = (listObjIndex, newCardDesc) => {
		if (!newCardDesc.length) return;

		const newCardObj = {
			id: getRandomIdNumber(),
			desc: newCardDesc,
		};

		setTrelloListObjs((prevTrelloListState) => {
			const prevTrelloListStateCopy = prevTrelloListState.slice();
			prevTrelloListStateCopy[listObjIndex].cards.push(newCardObj);
			return prevTrelloListStateCopy;
		});
	};

	const delCardhandler = (listObjId, cardToDeleteId) => {
		setTrelloListObjs((prevTrelloListState) => {
			const updatedListState = prevTrelloListState.slice();

			for (let list of updatedListState) {
				if (list.id === listObjId) {
					list.cards = list.cards.filter((card) => card.id !== cardToDeleteId);

					break;
				}
			}

			return updatedListState;
		});
	};

	return (
		<div className="App">
			<BoardNavBar />
			<div style={{ padding: "1em" }}>
				{!trelloListObjs.length ? (
					<h2 style={{ color: "white" }}>Add Your First List...Dont Be Shy</h2>
				) : null}
				<ListContainer
					delCardhandler={delCardhandler}
					addNewCard={addNewCard}
					trelloListObjs={trelloListObjs}
					addNewTrelloList={addNewTrelloList}
					delTrelloList={delTrelloList}
				/>
			</div>
		</div>
	);
}

export default App;
