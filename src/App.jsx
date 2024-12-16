import Header from "./components/Header";
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
import LogInOrSignUp from "./page/LogInOrSignUp";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter basename={import.meta.env.VITE_PUBLIC_PATH || "/"}>
        <ToastContainer />
        <Header />
        <div className="flex-grow">
          <Switch>
            <Route exact path="/">
              <LogInOrSignUp />
            </Route>
            <Route path="/todos/:id">
              <HomePage />
            </Route>
            <Route path="/add-todo/:id">
              <AddPage />
            </Route>
            <Route path="/todo/:id">
              <Todopage />
            </Route>
            <Route path="/edit/:id">
              <EditPage />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
