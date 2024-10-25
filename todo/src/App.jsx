import NavBar from "./components/NavBar";
import AddPage from "./page/AddPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./page/HomePage";
import Todopage from "./page/TodoPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/add-todo">
            <AddPage />
          </Route>
          <Route path="/todo/:id">
            <Todopage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
