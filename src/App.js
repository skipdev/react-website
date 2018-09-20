import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/home.js';
import AboutPage from './pages/about.js';
import NavBar from './pages/nav.js';
class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <NavBar />
               <Route name="home" exact path="/" component={HomePage} />
               <Route name="about" exact path="/about" component={AboutPage} />
            </div>
         </Router>
      )
   }
}
export default App;