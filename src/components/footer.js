import React, { Component } from 'react'
import IsScrolling from 'react-is-scrolling'

class Footer extends Component {

  render() {
    const { isScrollingDown, isScrollingUp } = this.props;
    return (
      <div>
        <div>
          { isScrollingDown &&
          console.log('down')
          }

          { isScrollingUp &&
          console.log('up')
          }
        </div>
      <div className="all flex column">
        <div className="footer flex" id='footer-js'>
          <p class="name">Stephy</p>
          <img className="x" alt="letter x" src={require('../images/x.png')}></img>
          <p className="copyright"> © 2018 All rights reserved.</p>
          <div className='mobile flex'>
            <ul className="icons flex row">
              <li><a href="https://www.twitter.com/st3phyx_x"><i className="fab fa-twitter fa-2x"></i></a></li>
              <li><a href="https://github.com/stephyx/"><i className="fab fa-github fa-2x"></i></a>
              </li>
              <li><a href="https://www.behance.net/stephyx"><i className="fab fa-behance fa-2x"></i></a>
              </li>
              <li><a href="https://frozenfanta.deviantart.com/"><i className="fab fa-deviantart fa-2x"></i></a></li>
            </ul>
          </div>
        </div>
        <span className="mobile-circle">
        </span>
      </div>
      </div>
    )
  }
}

export default IsScrolling(Footer);

