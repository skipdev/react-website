import React, { Component } from 'react'
import { Link } from 'gatsby'
import Particles from 'react-particles-js'

class Footer extends Component {
  state = {
    sidebarOpen: false,
  }

  toggleMenu = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    })
  }

  render() {
    return (
      <div className="sidebar-top flex">
        <nav className="x flex row">
          <a><img alt="letter x" src={require('../images/x.png')}></img></a>
          <br></br>
          <br></br>
        </nav>
        <ul className="flex row">
          <li><a href="https://www.twitter.com/st3phyx_x"><i className="fab fa-twitter fa-2x"></i></a></li>
          <li><a href="https://github.com/stephyx/"><i className="fab fa-github fa-2x"></i></a>
          </li>
          <li><a href="https://www.behance.net/stephyx"><i className="fab fa-behance fa-2x"></i></a>
          </li>
          <li><a href="https://frozenfanta.deviantart.com/"><i className="fab fa-deviantart fa-2x"></i></a></li>
        </ul>
        </div>
    )
  }
}

export default Footer;

