import React, { Component } from 'react'
import Layout from '../components/layout'
import SidebarLeft from '../components/sidebar-left.js'
import '../components/sidebar.css'

class HomePage extends Component {

  componentDidMount() {
    console.log('mount')
  }

  render() {
    return (
        <Layout>
          <div className='wrapper flex row'>
            <SidebarLeft/>
            <div className="main">
              <div id="top">
              <p></p>
              </div>
              <div id="about">
              <p className="title">Front-End Developer</p>
              <br></br>
              <br></br>
              <p>An ambitious Front-End Web Developer bringing a broad skill range in both website design and
                development.</p>
              </div>
            </div>
          </div>
        </Layout>
    )
  }
}
export default HomePage;

