import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './main.css'
import './style.css'

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
            <div>
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
