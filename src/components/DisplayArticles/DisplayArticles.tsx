import Article from "../Article/Article";
import { ArticleProps } from "../ArticlesTypes";

function DisplayArticles({ articles }: any) {
	return (
		<>
			{articles &&
				articles.length > 0 &&
				articles.map((article: ArticleProps, i: any) => (
					<Article
						key={i}
						id={i}
						{...article}></Article>
				))}
		</>
	);
}

export default DisplayArticles;
