import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="main">
          <div id="top">
            <p></p>
          </div>
          <div id="about">
            <p className="title">About</p>
            <br></br>
            <br></br>
            <p>Writing about me and why I love web stuff ^_^</p>
          </div>
        </div>
      </Layout>
    )
  }
}
export default AboutPage;

