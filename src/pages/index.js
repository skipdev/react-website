import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

class HomePage extends Component {
  // myName = 'Stephy'

  componentDidMount() {
    console.log('Render')
  }

  render() {
    return (
        <Layout>
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
        </Layout>
    )
  }
}
export default HomePage;

