import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination component", () => {
	test("calls setCurrentPage with correct value when previous page button is clicked", () => {
		const setCurrentPage = jest.fn();
		const { getByTestId } = render(
			<Pagination
				totalArticles={20}
				articlesPerPage={5}
				setCurrentPage={setCurrentPage}
				currentPage={2}
			/>
		);

		const previousPageButton = getByTestId("prevPageButton");

		// Click the previous page button
		fireEvent.click(previousPageButton);

		// Assert that setCurrentPage is called with correct value (1)
		expect(setCurrentPage).toHaveBeenCalledWith(1);
	});

	test("calls setCurrentPage with correct value when first page button is clicked", () => {
		const setCurrentPage = jest.fn();
		const { getByTestId } = render(
			<Pagination
				totalArticles={20}
				articlesPerPage={5}
				setCurrentPage={setCurrentPage}
				currentPage={3}
			/>
		);

		const firstPageButton = getByTestId("firstPageButton");

		// Click the first page button
		fireEvent.click(firstPageButton);

		// Assert that setCurrentPage is called with correct value (1)
		expect(setCurrentPage).toHaveBeenCalledWith(1);
	});

	test("calls setCurrentPage with correct value when page button is clicked", () => {
		const setCurrentPage = jest.fn();
		const { getByText } = render(
			<Pagination
				totalArticles={20}
				articlesPerPage={5}
				setCurrentPage={setCurrentPage}
				currentPage={3}
			/>
		);

		const pageButton = getByText("2");

		// Click the page button
		fireEvent.click(pageButton);

		// Assert that setCurrentPage is called with correct value (2)
		expect(setCurrentPage).toHaveBeenCalledWith(2);
	});

	test("calls setCurrentPage with correct value when last page button is clicked", () => {
		const setCurrentPage = jest.fn();
		const { getByTestId } = render(
			<Pagination
				totalArticles={20}
				articlesPerPage={5}
				setCurrentPage={setCurrentPage}
				currentPage={3}
			/>
		);

		const lastPageButton = getByTestId("lastPageButton");

		// Click the last page button
		fireEvent.click(lastPageButton);

		// Assert that setCurrentPage is called with correct value (4)
		expect(setCurrentPage).toHaveBeenCalledWith(4);
	});

	test("calls setCurrentPage with correct value when next page button is clicked", () => {
		const setCurrentPage = jest.fn();
		const { getByTestId } = render(
			<Pagination
				totalArticles={20}
				articlesPerPage={5}
				setCurrentPage={setCurrentPage}
				currentPage={2}
			/>
		);

		const nextPageButton = getByTestId("nextPageButton");

		// Click the next page button
		fireEvent.click(nextPageButton);

		// Assert that setCurrentPage is called with correct value (3)
		expect(setCurrentPage).toHaveBeenCalledWith(3);
	});
});
