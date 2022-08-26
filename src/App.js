// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Marvin Demo
          </a>
          <div className="navbar-nav mr-auto">
            
            <li className="nav-item">
            <a
              className="nav-link"
              href={"/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tutorials
            </a>
              {/* <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link> */}
            </li>
            <li className="nav-item">
            <a
              className="nav-link"
              href={"/add"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Add
            </a>
              {/* <Link to={"/add"} className="nav-link">
                Add
              </Link> */}
            </li>
          </div>
        </nav>
        <div className="container mt-3">
        <Router>
            <Routes>
              <Route exact path="/" element={<TutorialsList/>} />
              {/* <Route exact path="/tutorials" element={<Tutorial/>} /> */}
              <Route path="/add" element={<AddTutorial/>} />
              <Route path="/tutorials/:id" element={<Tutorial/>} />
              {/* <Route path="/tutorials" element={<Tutorial/>} /> */}
            </Routes>
          </Router>
        </div>
      </div>
    );
  }
}
export default App;