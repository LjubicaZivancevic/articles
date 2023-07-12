import React, { useRef } from "react";
import "./styles.module.css";

function NumberOfArticlesPerPage({ setArticlesPerPage }) {
	const choosenNumberOfArticles = useRef();

	return (
		<form>
			<label>Choose number of articles per page</label>
			<input
				data-testid="setNumber"
				onChange={() =>
					choosenNumberOfArticles.current.value <= 0
						? setArticlesPerPage(10)
						: setArticlesPerPage(choosenNumberOfArticles.current.value)
				}
				ref={choosenNumberOfArticles}
				type="number"></input>
		</form>
	);
}

export default NumberOfArticlesPerPage;
