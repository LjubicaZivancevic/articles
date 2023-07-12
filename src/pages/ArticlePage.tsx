import React, { useState } from "react";
import { useSelector } from "react-redux";
import DisplayArticles from "../components/DisplayArticles";
import { Container } from "semantic-ui-react";
import Pagination from "../components/Pagination/Pagination";
import NumberOfArticlesPerPage from "../components/NumberOfArticlesPerPage/NumberOfArticlesPerPage";
import { ListOfArticles } from "../components/ArticlesTypes";

function ArticlePage() {
	const articles = useSelector((state: ListOfArticles) => {
		if (
			state.articles.articles.articles !== undefined &&
			state.articles.searchTerm !== "" &&
			state.articles.searchTerm !== null &&
			state.articles.searchTerm !== undefined
		) {
			return state.articles.articles.articles.filter((article) =>
				article.title.toLowerCase().includes(state.articles.searchTerm)
			);
		}

		return state.articles.articles.articles;
	});

	console.log(articles);
	const [currentPage, setCurrentPage] = useState(1);
	const [articlesPerPage, setArticlesPerPage] = useState(10);
	const lastArticleIndex = currentPage * articlesPerPage;
	const firstArticleIndex = lastArticleIndex - articlesPerPage;

	const currentArticles =
		articles && articles.slice(firstArticleIndex, lastArticleIndex);

	return (
		<Container>
			<NumberOfArticlesPerPage setArticlesPerPage={setArticlesPerPage} />
			{articles && currentArticles && (
				<DisplayArticles articles={currentArticles}></DisplayArticles>
			)}
			<Pagination
				totalArticles={articles && articles.length}
				articlesPerPage={articlesPerPage}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</Container>
	);
}

export default ArticlePage;
