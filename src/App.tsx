import React, { useEffect } from "react";
import "./App.css";
import ArticlesAPI from "./api/articlesApi";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";
import ArticlePage from "./pages/ArticlePage";
import LikedArticles from "./pages/LikedArticles";
import Footer from "./components/Footer/Footer";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
	const { getArticlesApi, isLoading } = ArticlesAPI();

	useEffect(() => {
		getArticlesApi();
	}, []);

	return (
		<div className="App">
			<ResponsiveAppBar />
			<Routes>
				<Route
					path="/"
					element={isLoading ? <LoadingSpinner /> : <ArticlePage />}
				/>
				<Route
					path="likedArticles"
					element={<LikedArticles />}
				/>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
