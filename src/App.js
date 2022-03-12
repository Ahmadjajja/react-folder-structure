import Header from "./commonComponents/header"
import './App.css';
import {LandingPage} from "./modules/landing page/index"
// import {useState} from "react";
// import "bootstrap/css/bootstrap.min.css";   //confused here how this bootstrap added
// import "materialize/css/materialize.min.css";
import "bootstrap";
import "materialize-css"
//if import does not contain relative path syntax it will auto find the folder from the node modules
function App() {
  return (
    <div className="App">
        <Header />
        <LandingPage/>
    </div>
  );
}

export default App;
