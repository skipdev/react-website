import React, { Component } from 'react'
import Layout from '../components/layout'
import SidebarTop from '../components/sidebar-top.js'
import '../components/sidebar-top.css'

class ExperiencePage extends Component {
  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <SidebarTop/>
        <div className="main">
          <div id="top">
            <p></p>
          </div>
          <div id="about">
            <p className="title">Experiences</p>
            <br></br>
            <br></br>
            <p>Timeline of my experiences</p>
          </div>
        </div>
        </div>
      </Layout>
    )
  }
}
export default ExperiencePage;

