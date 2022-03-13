import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieScreen from "./pages/MovieScreen";
import FavouritesScreen from "./pages/FavouritesScreen";
import SearchScreen from "./pages/SearchScreen";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
        {/* <Routes>
          test
          <div>
            <Route
              // render={({ history }) => <SearchBox history={history} />}

              render={(props) => <SearchBox {...props} />}
              // component={SearchBox}
            />
          </div>
        </Routes> */}
      </header>

      <main>
        <Routes>
          <Route
            // render={({ history }) => <SearchBox history={history} />}

            render={(props) => <SearchBox {...props} />}
            // component={SearchBox}
          />
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
