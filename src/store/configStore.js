import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import articleReducer from "../reducers/article.reducer";
import { initSagas } from "../sagas";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configStore = () => {
	const store = configureStore(
		{
			reducer: { articles: articleReducer },
		},
		composeWithDevTools(applyMiddleware(...middlewares))
	);

	initSagas(sagaMiddleware);
	return store;
};

export default configStore;
