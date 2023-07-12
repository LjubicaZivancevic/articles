import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Icon, Segment } from "semantic-ui-react";
import style from "./article.module.css";

import {
	addLikedArticle,
	deleteLikedArticleFromList,
} from "../../actions/articles.actions";
import Modal from "../Modal/Modal";
import { ArticleProps } from "../ArticlesTypes";

function Article(props: ArticleProps) {
	const dispatch = useDispatch();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const listOfLikedArticles = useSelector(
		(state: any) => state.articles.likedArticles
	);

	const articleIsLiked = Boolean(
		listOfLikedArticles.find(
			(likedArticle: ArticleProps) => likedArticle.id === props.id
		)
	);

	const likeArticle = (payload: any) => {
		if (listOfLikedArticles.length > 0) {
			if (articleIsLiked) {
				dispatch(deleteLikedArticleFromList(payload.id));
			} else {
				dispatch(addLikedArticle(payload));
			}
		} else {
			dispatch(addLikedArticle(payload));
		}
	};

	return (
		<>
			<Segment
				horizontal="true"
				color="blue">
				<Grid
					columns={3}
					textAlign="right"
					stackable>
					<Grid.Row>
						<Grid.Column
							textAlign="left"
							verticalAlign="middle"
							width={5}>
							<a href={props.url}>
								<img
									src={props.urlToImage}
									style={{
										width: "100%",
										height: "100%",
										margin: "0 auto",
									}}></img>
							</a>
						</Grid.Column>
						<Grid.Column
							width={8}
							textAlign="left"
							verticalAlign="middle">
							<h1> {props.title}</h1>
							<p>{props.description}</p>
							<div
								className={style.seeDetails}
								onClick={() => setIsModalOpen(!isModalOpen)}>
								See details
							</div>
						</Grid.Column>

						<Grid.Column width={3}>
							<Icon
								name="heart"
								size="big"
								role="icon"
								data-testid="iconHeart"
								className={articleIsLiked ? style.liked : style.notLiked}
								onClick={() => likeArticle(props)}></Icon>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			{isModalOpen && (
				<Modal
					{...props}
					setIsModalOpen={setIsModalOpen}
					isModalOpen={isModalOpen}
				/>
			)}
		</>
	);
}

export default Article;
