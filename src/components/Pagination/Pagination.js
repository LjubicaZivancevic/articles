import React from "react";
import styles from "./pagination.module.css";
import { Icon } from "semantic-ui-react";

function Pagination({
	totalArticles,
	articlesPerPage,
	setCurrentPage,
	currentPage,
}) {
	let pages = [];
	let totalPages = Math.ceil(totalArticles / articlesPerPage);

	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}

	return (
		<div className={styles.Pagination}>
			<Icon
				name="arrow circle left"
				data-testid="prevPageButton"
				size="big"
				onClick={() => {
					currentPage === 1
						? setCurrentPage(currentPage)
						: setCurrentPage(currentPage - 1);
				}}
			/>
			<Icon
				name="angle double left"
				data-testid="firstPageButton"
				size="big"
				onClick={() => {
					setCurrentPage(1);
				}}
			/>
			{pages.map((page, index) => {
				return (
					<button
						key={index}
						onClick={() => setCurrentPage(page)}
						className={page === currentPage ? styles.active : ""}>
						{page}
					</button>
				);
			})}
			<Icon
				name="angle double right"
				size="big"
				data-testid="lastPageButton"
				onClick={() => {
					setCurrentPage(totalPages);
				}}
			/>
			<Icon
				name="arrow circle right"
				size="big"
				data-testid="nextPageButton"
				onClick={() => {
					currentPage === totalPages
						? setCurrentPage(currentPage)
						: setCurrentPage(currentPage + 1);
				}}
			/>
		</div>
	);
}

export default Pagination;
