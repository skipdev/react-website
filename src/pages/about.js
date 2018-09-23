import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import '../components/sidebar.css'

class AboutPage extends Component {
render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <Sidebar pageTitle={'About'}/>
          <div className="main">
            <div id="top">
              <p></p>
            </div>
            <div id="about">
              <br></br>
              <br></br>
              <p>Writing about me and why I love web stuff ^_^</p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default AboutPage;

