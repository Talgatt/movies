import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import "./App.css";
import Navbar from "./components/Navbar";
import Movie from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
        test
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie" element={<Movie />}></Route>
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
