import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import '../components/sidebar.css'
import ContactForm from '../components/contact-form'

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <div className="flex column sidebar-img">
            <Sidebar pageTitle={'Contact'}/>
            <img className="contact-img image" alt="contact-img" src={require('../images/profile_picture.png')}></img>
          </div>
          <div className="main">
          <h1 class="contact-title dark">Get in touch!</h1>
          <div id="about">
            <ContactForm/>
          </div>
        </div>
        </div>
      </Layout>
    )
  }
}
export default ContactPage;

