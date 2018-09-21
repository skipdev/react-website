import React, { Component } from 'react'

class HomePage extends Component {
	myName = 'Stephy'

	  componentDidMount() {
	    console.log('Render')
	  }

   render() {
      return (
        <div>
          <div className="sidebar">
             <div id="particles-js"></div>
             <img alt="Logo" id="menu" src="imgs/menu-icon.png"></img>

             <img alt="profile" id="profile_img" src="https://avatars0.githubusercontent.com/u/32325240?s=460&v=4">
             </img>
             <br></br>
             <p><b>{ this.myName }</b></p>
             <br></br>
             <nav className="menu">
                <a><img alt="x" src="imgs/x.png"></img></a>
                <br></br>
                <br></br>
             </nav>
             <ul>
                <li><a href="https://www.twitter.com/st3phyx_x"><i className="fab fa-twitter fa-2x"></i></a></li>
                <li><a href="https://github.com/stephyx/"><i className="fab fa-github fa-2x"></i></a>
                </li>
                <li><a href="https://www.behance.net/stephyx"><i className="fab fa-behance fa-2x"></i></a>
                </li>
                <li><a href="https://frozenfanta.deviantart.com/"><i className="fab fa-deviantart fa-2x"></i></a></li>
             </ul>
          </div>
        </div>
      )
   }
}
export default HomePage;
