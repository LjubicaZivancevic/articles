import { useDispatch } from "react-redux";
import { setArticles } from "../actions/articles.actions";
import axios from "axios";
import { useState } from "react";

function ArticlesAPI() {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState();

	const apiURL =
		"https://newsapi.org/v2/everything?q=tesla&from=2023-07-0&sortBy=publishedAt&apiKey=724be1771e0e4b8c9d890a36c0705071";

	const getArticlesApi = async () => {
		setIsLoading(true);
		try {
			const response = await axios
				.get(apiURL)
				.then((response) => dispatch(setArticles(response.data)));

			setIsLoading(false);
			return response;
		} catch (err) {
			console.log(err);
		}
	};
	return {
		getArticlesApi,
		isLoading,
	};
}

export default ArticlesAPI;
