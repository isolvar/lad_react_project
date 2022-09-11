import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateWatchlist from "./pages/CreateWatchlist";
import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import WatchlistPage from "./pages/WatchlistPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/create" element={<CreateWatchlist />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/watchlist/:listId" element={<WatchlistPage />} />
                <Route
                    path="/watchlist/edit/:listId"
                    element={<WatchlistPage />}
                />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
