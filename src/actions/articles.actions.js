import { createAction } from "@reduxjs/toolkit";

export const setArticles = createAction("setArticles");
export const addLikedArticle = createAction("addLikedArticle");
export const deleteLikedArticleFromList = createAction(
	"deleteLikedArticleFromList"
);
export const doSearch = createAction("doSearch");
