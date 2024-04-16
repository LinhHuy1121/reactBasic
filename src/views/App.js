import logo from "./logo.svg";
import "./App.scss";
//import "./Login.scss";
import MyComponent from "./example/MyComponent.js";
//import SignInForm from "./example/SignInForm.js";
//import Login from "./example/Login.js";

// class component / function component (function/arrow )
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


        <MyComponent />


      </header>
    </div>
  );
}

export default App;
