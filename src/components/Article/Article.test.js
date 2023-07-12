import { render, fireEvent, getByTestId } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Article from "./Article";

const mockStore = configureStore([]);

describe("Article component", () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			articles: {
				likedArticles: [],
			},
		});
	});

	test("renders article details correctly", () => {
		const article = {
			id: 1,
			source: {
				id: null,
				name: "Le Point",
			},
			author: "Guillaume Grallet",
			title:
				"Pourquoi Musk propose un « concours de taille de pénis » à Zuckerberg",
			description:
				"ENTRETIEN. Olivier Babeau, president de l'Institut Sapiens, explique les raisons qui poussent le proprietaire de Twitter a defier grossierement le createur de Threads, son principal concurrent.",
			url: "https://www.lepoint.fr/high-tech-internet/pourquoi-musk-propose-un-concours-de-taille-de-penis-a-zuckerberg-11-07-2023-2528108_47.php",
			urlToImage:
				"https://static.lpnt.fr/images/2023/07/11/24736335lpw-24739342-article-jpg_9647436_540x282.jpg",
			publishedAt: "2023-07-11T16:23:00Z",
			content:
				"Jusqu'où iront les provocations d'Elon Musk envers Mark Zuckerberg ? Répondant à une plaisanterie en ligne, l'entrepreneur en série (Tesla, SpaceX, Starlink), par ailleurs propriétaire de Twitter dep… [+7599 chars]",
		};

		const { getByText, getByRole, getByTestId } = render(
			<Provider store={store}>
				<Article {...article} />
			</Provider>
		);

		expect(getByText(article.title)).toBeInTheDocument();
		expect(getByText(article.description)).toBeInTheDocument();
		expect(getByRole("img")).toHaveAttribute("src", article.urlToImage);
		expect(getByRole("link")).toHaveAttribute("href", article.url);
	});

	test("clicking on like button add article to liked article list", () => {
		const article = {
			id: 1,
			title: "Test Article",
			description: "This is a test article",
			url: "https://example.com",
			urlToImage: "https://example.com/image.jpg",
		};

		const { getByRole, getByTestId } = render(
			<Provider store={store}>
				<Article {...article} />
			</Provider>
		);

		const likeButton = getByTestId("iconHeart");

		fireEvent.click(likeButton);

		const actions = store.getActions();

		expect(actions).toHaveLength(1);
		expect(actions[0]).toEqual({ type: "addLikedArticle", payload: article });

		fireEvent.click(likeButton);
	});
});
