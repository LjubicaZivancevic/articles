import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import NumberOfArticlesPerPage from "./NumberOfArticlesPerPage";

describe("NumberOfArticlesPerPage component", () => {
	test("calls setArticlesPerPage with correct value when input changes", () => {
		const setArticlesPerPage = jest.fn();
		const { getByTestId } = render(
			<NumberOfArticlesPerPage setArticlesPerPage={setArticlesPerPage} />
		);

		const input = getByTestId("setNumber");

		fireEvent.change(input, { target: { value: "5" } });

		expect(setArticlesPerPage).toHaveBeenCalledWith("5");
	});

	test("calls setArticlesPerPage with default value when input value is negative", () => {
		const setArticlesPerPage = jest.fn();
		const { getByTestId } = render(
			<NumberOfArticlesPerPage setArticlesPerPage={setArticlesPerPage} />
		);

		const input = getByTestId("setNumber");

		fireEvent.change(input, { target: { value: "-10" } });

		expect(setArticlesPerPage).toHaveBeenCalledWith(10);
	});

	test("calls setArticlesPerPage with default value when input value is 0", () => {
		const setArticlesPerPage = jest.fn();
		const { getByTestId } = render(
			<NumberOfArticlesPerPage setArticlesPerPage={setArticlesPerPage} />
		);
		const input = getByTestId("setNumber");

		fireEvent.change(input, { target: { value: "0" } });

		expect(setArticlesPerPage).toHaveBeenCalledWith(10);
	});
});
