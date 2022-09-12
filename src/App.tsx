import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateEditWatchlist from "./pages/CreateEditWatchlist";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";
import WatchlistPage from "./pages/WatchlistPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/create" element={<CreateEditWatchlist />} />
                <Route path="/watchlist/:listId" element={<WatchlistPage />} />
                <Route
                    path="/watchlist/edit/:listId"
                    element={<CreateEditWatchlist />}
                />
                <Route path="/search/:searchValue" element={<SearchPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
