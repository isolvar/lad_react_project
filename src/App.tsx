import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateWatchlist from "./pages/CreateWatchlist";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/create" element={<CreateWatchlist />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
