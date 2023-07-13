export type ArticleProps = {
	id?: number | string;
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
		articles: ArticleProps[];
		likedArticles: ArticleProps[];
		searchTerm: string;
	};
};
