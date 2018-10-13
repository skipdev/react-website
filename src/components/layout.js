import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer.js'
import './main.css'
import './index.css'
import './transitions.css'
import './work.css'
import './contact.css'
import './style.css'
import './skills.css'
import './sidebar.css'
import './footer.css'

class Layout extends React.Component {

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
            <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
            <div>
              {children}
            </div>
            <Footer/>
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
