import { setArticles } from "../actions/articles.actions";
import axios from "axios";
import { take, put, call } from "redux-saga/effects";

export function* articleSaga() {
	const apiURL =
		"https://newsapi.org/v2/everything?q=tesla&from=2023-07-0&sortBy=publishedAt&apiKey=724be1771e0e4b8c9d890a36c0705071";

	yield take(setArticles.toString());

	const result = yield call(axios, apiURL);

	yield put(setArticles);
}
