import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import '../components/sidebar.css'

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <Sidebar pageTitle={'Contact'}/>
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

