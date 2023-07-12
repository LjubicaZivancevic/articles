import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import Searchbar from "./Searchbar";
import { doSearch } from "../../actions/articles.actions";

jest.mock("react-redux", () => ({
	useDispatch: jest.fn(),
}));

describe("Searchbar component", () => {
	test("dispatches doSearch action with correct value when input changes", () => {
		const dispatch = jest.fn();
		useDispatch.mockReturnValue(dispatch);
		const { getByPlaceholderText } = render(<Searchbar />);

		const input = getByPlaceholderText("Search...");

		fireEvent.change(input, { target: { value: "example" } });

		expect(dispatch).toHaveBeenCalledWith(doSearch("example"));
	});
});
