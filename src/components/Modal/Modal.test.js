import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal component", () => {
	test("renders modal content correctly", () => {
		const props = {
			urlToImage: "https://example.com/image.jpg",
			author: "John Doe",
			publishedAt: "2023-07-12",
			title: "Test Article",
			content: "This is a test article.",
			url: "https://example.com/article",
			setIsModalOpen: jest.fn(),
			isModalOpen: true,
		};

		const { getByText, getByAltText, getByRole, getByTestId } = render(
			<Modal {...props} />
		);

		expect(getByAltText("Article Image")).toBeInTheDocument();
		expect(getByText(props.title)).toBeInTheDocument();
		expect(getByText(props.content)).toBeInTheDocument();
		expect(getByText("See full article")).toBeInTheDocument();
		expect(getByRole("link")).toHaveAttribute("href", props.url);
		expect(getByTestId("modalCloseButton")).toBeInTheDocument();
	});

	test("calls setIsModalOpen with correct value when overlay is clicked", () => {
		const props = {
			urlToImage: "https://example.com/image.jpg",
			author: "John Doe",
			publishedAt: "2023-07-12",
			title: "Test Article",
			content: "This is a test article.",
			url: "https://example.com/article",
			setIsModalOpen: jest.fn(),
			isModalOpen: true,
		};

		const { getByTestId } = render(<Modal {...props} />);

		const overlay = getByTestId("modalOverlay");

		fireEvent.click(overlay);

		expect(props.setIsModalOpen).toHaveBeenCalledWith(false);
	});

	test("calls setIsModalOpen with correct value when close button is clicked", () => {
		const props = {
			urlToImage: "https://example.com/image.jpg",
			author: "John Doe",
			publishedAt: "2023-07-12",
			title: "Test Article",
			content: "This is a test article.",
			url: "https://example.com/article",
			setIsModalOpen: jest.fn(),
			isModalOpen: true,
		};

		const { getByTestId } = render(<Modal {...props} />);

		const closeButton = getByTestId("modalCloseButton");

		fireEvent.click(closeButton);

		expect(props.setIsModalOpen).toHaveBeenCalledWith(false);
	});
});
