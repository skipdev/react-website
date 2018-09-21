import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js';
import { StaticQuery, graphql } from 'gatsby'
import './main.css'
import './style.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { httpEquiv: 'X-UA-Compatible', content: 'ie=edge' },
            { name: 'description', content: 'StephyX - Professional and Bespoke Web Development.' },
            { name: 'keywords', content: 'web development, stephyx, steph barden, southampton web design, southampton website, web design' },
          ]}
        >
          <html lang="en" />
          <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
          <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
          <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"></link>
          <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        </Helmet>
        <div className='flex'>
          <div className="sidebar">
            <div id="particles-js">
              <Particles
                params={{
                  particles: {
                    number: {
                      value: 50,
                      density: {
                        enable: true,
                        value_area: 1000
                      }
                    },
                    color: {
                      value: "#ffffff"
                    },
                    shape: {
                      type: "circle",
                      stroke: {
                        width: 0,
                        color: "white"
                      },
                      polygon: {
                        nb_sides: 5
                      },
                      image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                      }
                    },
                    opacity: {
                      value: 0.5,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                      }
                    },
                    size: {
                      value: 6,
                      random: true,
                      anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                      }
                    },
                    line_linked: {
                      enable: true,
                      distance: 150,
                      color: "#ffffff",
                      opacity: 0.4,
                      width: 1
                    },
                    move: {
                      enable: true,
                      speed: 6,
                      direction: "none",
                      random: false,
                      straight: false,
                      out_mode: "out",
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    }
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse"
                      },
                      onclick: {
                        enable: true,
                        mode: "push"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 400,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                      },
                      repulse: {
                        distance: 200
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                  },
                  retina_detect: true,
                  config_demo: {
                    hide_card: true,
                    background_color: "white",
                    background_image: "",
                    background_position: "50% 50%",
                    background_repeat: "no-repeat",
                    background_size: "cover"
                  }
                }}
              />
            </div>
            <img alt="menu icon" id="menu" src={require('../images/menu-icon.png')}></img>

            <img alt="profile picture" id="profile_img" src="https://avatars0.githubusercontent.com/u/32325240?s=460&v=4">
            </img>
            <br></br>
            <p><b>Stephy</b></p>
            <br></br>
            <nav className="menu">
              <a><img alt="letter x" src={require('../images/x.png')}></img></a>
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
            {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
