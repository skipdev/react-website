import React, { Component } from 'react';
class HomePage extends Component {
   render() {
      return (
            <html>
               <head>
                  <meta charSet="UTF-8"></meta>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                  <link rel="stylesheet" type="text/css" href="css/main.css"></link>
                  <link rel="stylesheet" type="text/scss" href="css/particles.scss"></link>
                  <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
                  <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"></link>
                  <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
                  <script src="js/particles.babel"></script>
                  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
                  <link rel="stylesheet" media="screen" href="css/style.css"></link>
                     <title>StephyX Web</title>
               </head>
               <body>
               <wrapper>
                  <div className="sidebar">
                     <div id="particles-js"></div>
                     <img id="menu" src="imgs/menu-icon.png"></img>

                     <img id="profile_img" src="https://avatars0.githubusercontent.com/u/32325240?s=460&v=4">
                     </img>
                     <br></br>
                     <p><b>Stephy</b></p>
                     <br></br>
                     <nav className="menu">
                        <a href="#"><img src="imgs/x.png"></img></a>
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

                  <div className="main">
                     <div id="top"></div>
                  </div>
                  <div id="about">
                     <p className="title">Front-End Developer</p>
                     <br></br>
                     <br></br>
                     <p>An ambitious Front-End Web Developer bringing a broad skill range in both website design and
                     development.</p>
                  </div>
                  <hr></hr>
               <script src="particles.js"></script>
               <script src="js/app.js"></script>
               <script>
                  var count_particles, stats, update;
                  stats = new Stats;
                  stats.setMode(0);
                  stats.domElement.style.position = 'absolute';
                  stats.domElement.style.left = '0px';
                  stats.domElement.style.top = '0px';
                  document.body.appendChild(stats.domElement);
                  count_particles = document.querySelector('.js-count-particles');
                  update = function() {
                  stats.begin();
                  stats.end();
                  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                  count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
               }
                  requestAnimationFrame(update);
               };
                  requestAnimationFrame(update);
               </script>
                  <br></br>
                  <br></br>
                  <br></br>
      </wrapper>
      </body>
      </html>
      )
   }
}
export default HomePage;