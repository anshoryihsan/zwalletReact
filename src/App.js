import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './assets/css/index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Home from './Pages/Home/Content';
import Home from './Pages/Home';
import TopUp from './Pages/TopUp/';
import Transfer from './Pages/Transfer/';
import Amount from './Pages/Transfer/Components/amount.js';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path='/top-up' component={TopUp} />
          <Route path='/transfer' component={Transfer} />
          <Router path='/transfer/amount' component={Amount} />
        </Router>
        <Footer />
      </>

    )
  }
}
export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <Home />
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//   );
// }


