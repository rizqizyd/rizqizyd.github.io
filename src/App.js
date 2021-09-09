import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
// import Portfolio from "./pages/Portfolio/Portfolio";
import Game from "./pages/Game/Game";
import Project from "./pages/Project/Project";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
