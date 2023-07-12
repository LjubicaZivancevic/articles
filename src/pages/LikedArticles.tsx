import React from "react";
import { useSelector } from "react-redux";
import DisplayArticles from "../components/DisplayArticles";
import { Container } from "semantic-ui-react";
import { ListOfArticles } from "../components/ArticlesTypes";

function LikedArticles() {
	const likedArticles = useSelector((state: ListOfArticles) => {
		if (
			state.articles.likedArticles !== undefined &&
			state.articles.searchTerm !== "" &&
			state.articles.searchTerm !== null &&
			state.articles.searchTerm !== undefined
		) {
			return state.articles.likedArticles.filter((article) =>
				article.title.toLowerCase().includes(state.articles.searchTerm)
			);
		}

		return state.articles.likedArticles;
	});
	return (
		<>
			<Container>
				<DisplayArticles articles={likedArticles}></DisplayArticles>
			</Container>
		</>
	);
}

export default LikedArticles;
