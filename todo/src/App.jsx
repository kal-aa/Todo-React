import NavBar from "./components/NavBar";
import AddPage from "./page/AddPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./page/HomePage";
import Todopage from "./page/TodoPage";
import NotFoundPage from "./page/NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import EditPage from "./page/EditPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer />
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
          <Route path="/edit/:id">
            <EditPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
