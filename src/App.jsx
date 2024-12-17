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
import LOgOrSignPage from "./page/LogOrSignPage";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter basename={import.meta.env.VITE_PUBLIC_PATH || "/"}>
        <ToastContainer />
        <Header />
        <div className="flex-grow">
          <Switch>
            <Route exact path="/">
              <LOgOrSignPage />
            </Route>
            <Route exact path="/todos/:email_id">
              <HomePage />
            </Route>
            <Route path="/add-todo/:email_id">
              <AddPage />
            </Route>
            <Route path="/todos/:email_id/todo/:todo_id">
              <Todopage />
            </Route>
            <Route path="/todos/:email_id/edit/:todo_id">
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
