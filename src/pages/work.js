import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import '../components/sidebar.css'

class PortfolioPage extends Component {
  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <Sidebar pageTitle={'Work'}/>
        <div className="main">
          <div id="about">
            <p>Write about certifications, link to projects, link to portfolios</p>
          </div>
        </div>
        </div>
      </Layout>
    )
  }
}
export default PortfolioPage;

