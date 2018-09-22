import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import './main.css'
import './style.css'

class Layout extends React.Component {
  state = {
    sidebarOpen: false,
  }

  toggleMenu = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    })
  }

  render() {
    const { children } = this.props

    return (
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
            />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                  crossOrigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
            <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"></link>
            <div className='flex'>
              <div className="sidebar flex column">
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
                <img alt="menu icon" id="menu-button" src={require('../images/menu-icon.png')} onClick={this.toggleMenu}></img>
                <img alt="a drawing of me" id="profile_img" src="https://avatars0.githubusercontent.com/u/32325240?s=460&v=4">
                </img>
                <br></br>
                <p><b>Stephy</b></p>
                <br></br>
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
                <div className={`menu-div ${this.state.sidebarOpen ? '' : 'hidden'}`} id='menu-div' onClick={this.toggleMenu}>
                  <div className="navbar flex column">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                  </div>
                </div>
              </div>
              {children}
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
