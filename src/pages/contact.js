import React, { Component } from 'react'
import Layout from '../components/layout'
import SidebarTop from '../components/sidebar-top.js'
import '../components/sidebar-top.css'

class ContactPage extends Component {
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
            <p className="title">Contact</p>
            <br></br>
            <br></br>
            <p>Contact form here! :)</p>
          </div>
        </div>
        </div>
      </Layout>
    )
  }
}
export default ContactPage;

