import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Proveedores from "./pages/Proveedores";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/proveedores">
          <Proveedores />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
