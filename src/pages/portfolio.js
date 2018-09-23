import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import '../components/sidebar.css'

class PortfolioPage extends Component {
  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <Sidebar pageTitle={'Portfolio'}/>
        <div className="main">
          <div id="top">
            <p></p>
          </div>
          <div id="about">
            <p className="title">Portfolio</p>
            <br></br>
            <br></br>
            <p>Waddup, it's the portfolio page!</p>
          </div>
        </div>
        </div>
      </Layout>
    )
  }
}
export default PortfolioPage;

