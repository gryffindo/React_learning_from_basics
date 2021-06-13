import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clock from "./components/Clock";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <Clock />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
