import {Switch, Route, Link} from "react-router-dom"
import Home from "./home"
import Movies from "./movies"
import Shows from "./shows"
import Buys from "./buys"
import Users from "./users"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/shows">Tv Shows</Link>
        <Link to="/buys">Purchases</Link>
        <Link to="/users">Profile</Link>
      </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/shows">
            <Shows />
          </Route>
          <Route path="/buys">
            <Buys />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
