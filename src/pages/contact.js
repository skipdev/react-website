import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

class ContactPage extends Component {
  render() {
    return (
      <Layout>
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
      </Layout>
    )
  }
}
export default ContactPage;

