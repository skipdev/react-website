import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import '../components/sidebar.css'
// import '../components/contact-form'
import { contact } from '../api'

class ContactPage extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  submitForm = async (e) => {
    e.preventDefault()
    await contact(this.state.name, this.state.email, this.state.message)
  }

  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <div className="flex column sidebar-img">
            <Sidebar pageTitle={'Contact'}/>
            <img className="contact-img image" alt="contact-img" src={require('../images/profile_picture.png')}></img>
          </div>
          <div className="main">
          <h1 className="contact-title dark">Get in touch!</h1>
          <div id="about">
            <form onSubmit={this.submitForm} className="contact-form-all flex column">
              <div className="contact-form flex">
                <div className="left flex column">
                  <span className="contact-label">Name</span>
                  <input onKeyUp={(event) => this.setState({name: event.target.value})} type="text" name="contact-name" className="contact-name" placeholder="Enter your name"></input>
                  <span className="contact-label">Email</span>
                  <input onKeyUp={(event) => this.setState({email: event.target.value})} type="text" name="contact-email" className="contact-email" placeholder="Enter your email"></input>
                </div>
                <div className="right flex column">
                  <span className="contact-label contact-label-message">Message</span>
                  <textarea onKeyUp={(event) => this.setState({message: event.target.value})} name="contact-email" className="contact-message" placeholder="Enter your message"></textarea>
                </div>
              </div>
              <button name="contact-submit" className="contact-submit">Submit</button>
          </form>
          </div>
        </div>
        </div>
      </Layout>
    )
  }
}
export default ContactPage;

