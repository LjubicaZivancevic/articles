import { useDispatch } from "react-redux";
import { setArticles } from "../actions/articles.actions";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ArticlesAPI() {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState();

	function formatData(data) {
		const newData = data.data.articles.map((element) => {
			return {
				id: uuidv4(),
				...element,
			};
		});

		dispatch(setArticles(newData));
		return newData;
	}

	const apiURL =
		"https://newsapi.org/v2/everything?q=tesla&from=2023-07-0&sortBy=publishedAt&apiKey=724be1771e0e4b8c9d890a36c0705071";

	const getArticlesApi = async () => {
		setIsLoading(true);
		try {
			const response = await axios
				.get(apiURL)
				.then((response) => formatData(response));

			setIsLoading(false);
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
