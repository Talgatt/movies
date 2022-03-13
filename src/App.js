import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieScreen from "./pages/MovieScreen";
import FavouritesScreen from "./pages/FavouritesScreen";
import SearchScreen from "./pages/SearchScreen";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
        test
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/movie/:id" element={<MovieScreen />} exact />
          <Route path="/favourites" element={<FavouritesScreen />} />
          <Route path="/search/name/:name?" element={<SearchScreen />} exact />
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
