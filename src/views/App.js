import logo from "./logo.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.scss";
//import "./Login.scss";
import MyComponent from "./example/MyComponent.js";
//import SignInForm from "./example/SignInForm.js";
//import Login from "./example/Login.js";
import ListToDo from "./Todos/ListToDo.js"
import Nav from './Nav/Nav'
import Home from "./example/Home.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// class component / function component (function/arrow )
function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/about">
              < MyComponent />
            </Route>
          </Switch>

        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"

        />
      </div>
    </Router>
  );
}

export default App;
