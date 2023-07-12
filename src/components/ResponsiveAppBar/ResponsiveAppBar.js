import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import styles from "./navbar.module.css";
import Searchbar from "../SearchBar/Searchbar";

function ResponsiveAppBar() {
	return (
		<>
			<Grid stackable>
				<Grid.Row
					columns={3}
					className={styles.navigation}>
					<Grid.Column
						width={3}
						className={styles.linkContainer}>
						<Link to="/">Articles</Link>
					</Grid.Column>
					<Grid.Column
						width={3}
						className={styles.linkContainer}>
						<Link to="/likedArticles">Liked articles</Link>
					</Grid.Column>
					<Grid.Column
						width={5}
						floated="right">
						<Searchbar></Searchbar>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	);
}

export default ResponsiveAppBar;
