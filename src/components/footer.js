import React, { Component } from 'react'

class Footer extends Component {

  render() {
    return (
      <div className="footer flex">
        <a><img className="x" alt="letter x" src={require('../images/x.png')}></img></a>
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

