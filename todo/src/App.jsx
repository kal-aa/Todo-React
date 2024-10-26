import NavBar from "./components/NavBar";
import AddPage from "./page/AddPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./page/HomePage";
import Todopage from "./page/TodoPage";
import NotFoundPage from "./page/NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import EditPage from "./page/EditPage";
import Footer from "./components/Footer";
import ContactUs from "./page/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <HomePage />
            <Footer />
          </Route>
          <Route path="/add-todo">
            <AddPage />
            <Footer />
          </Route>
          <Route path="/todo/:id">
            <Todopage />
            <Footer />
          </Route>
          <Route path="/edit/:id">
            <EditPage />
            <Footer />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
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
