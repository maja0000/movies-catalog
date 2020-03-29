import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notfound from "./Components/Notfound";
import FilmsList from "./Components/MoviesList";
import Movie from "./Components/Movie";
function App() {
  return (
    <div className="App-header">
      <Router>
        <Switch>
          <Route exact path="/" component={FilmsList} />
          <Route exact path="/random" component={Movie} />
          <Route path="*" component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
