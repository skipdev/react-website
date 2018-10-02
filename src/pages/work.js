import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import '../components/sidebar.css'

class PortfolioPage extends Component {
  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <div className="flex column sidebar-img">
          <Sidebar pageTitle={'Work'}/>
          <img className="contact-img image" alt="contact-img" src={require('../images/profile_picture.png')}></img>
          </div>
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

