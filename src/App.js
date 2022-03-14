import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieScreen from "./pages/MovieScreen";
import FavouritesScreen from "./pages/FavouritesScreen";
import SearchScreen from "./pages/SearchScreen";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/movie/:id" element={<MovieScreen />} exact />
          <Route path="/favourites" element={<FavouritesScreen />} exact />
          <Route path="/search/:query" element={<SearchScreen />} exact />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
