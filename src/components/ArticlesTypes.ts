export type ArticleProps = {
	id?: number;
	source: {
		id: null | number;
		name: string;
	};
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
};

export type ListOfArticles = {
	articles: {
		articles: {
			articles: ArticleProps[];
		};
		likedArticles: ArticleProps[];
		searchTerm: string;
	};
};
