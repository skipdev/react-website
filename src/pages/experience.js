import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

class ExperiencePage extends Component {
  render() {
    return (
      <Layout>
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
      </Layout>
    )
  }
}
export default ExperiencePage;

