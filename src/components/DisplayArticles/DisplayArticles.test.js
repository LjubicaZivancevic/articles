import { render } from "@testing-library/react";
import DisplayArticles from "./DisplayArticles";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../../reducers/article.reducer";

describe("DisplayArticles component", () => {
	test("renders articles correctly", () => {
		const initialState = {
			articles: {
				likedArticles: [],
			},
		};
		const store = configureStore({
			reducer: { articles: articleReducer },
		});

		const articles = [
			{
				id: 1,
				title: "Article 1",
				description: "Description 1",
				url: "https://example.com/article1",
				urlToImage: "https://example.com/image1.jpg",
			},
			{
				id: 2,
				title: "Article 2",
				description: "Description 2",
				url: "https://example.com/article2",
				urlToImage: "https://example.com/image2.jpg",
			},
		];

		const { getByText } = render(
			<Provider store={store}>
				<DisplayArticles articles={articles} />
			</Provider>
		);

		articles.forEach((article) => {
			expect(getByText(article.title)).toBeInTheDocument();
			expect(getByText(article.description)).toBeInTheDocument();
		});
	});

	test("renders no articles when articles array is empty", () => {
		const articles = [];

		const { queryByText } = render(<DisplayArticles articles={articles} />);
	});
});
