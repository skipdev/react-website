import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Particles from '../js-particles/particles.js'
import ParticlesConfig from '../js-particles/particles.babel'
import ParticlesApp from '../js-particles/particle-app.js'
import SmallParticleScript from '../js-particles/small-script.js'
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
          <Particles/>
          <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
          <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"></link>
          <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        </Helmet>
        <div className='flex'>
          <div className="sidebar">
            <ParticlesConfig/>
            <ParticlesApp/>
            <SmallParticleScript/>
            <div id="particles-js"></div>
            <img alt="Logo" id="menu" src={require('../images/menu-icon.png')}></img>

            <img alt="profile" id="profile_img" src="https://avatars0.githubusercontent.com/u/32325240?s=460&v=4">
            </img>
            <br></br>
            <p><b>Stephy</b></p>
            <br></br>
            <nav className="menu">
              <a><img alt="x" src={require('../images/x.png')}></img></a>
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
