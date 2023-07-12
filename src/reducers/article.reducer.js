import { createReducer } from "@reduxjs/toolkit";

import {
	addLikedArticle,
	deleteLikedArticleFromList,
	doSearch,
	setArticles,
} from "../actions/articles.actions";

const initialState = {
	articles: [],
	likedArticles: [],
	searchTerm: null,
};

const articleReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(setArticles, (state, action) => {
			state.articles = action.payload;
		})
		.addCase(addLikedArticle, (state, action) => {
			state.likedArticles.push(action.payload);
		})
		.addCase(deleteLikedArticleFromList, (state, action) => {
			state.likedArticles = state.likedArticles.filter(
				(article) => article.id !== action.payload
			);
		})
		.addCase(doSearch, (state, action) => {
			return { ...state, searchTerm: action.payload };
		});
});

export default articleReducer;
