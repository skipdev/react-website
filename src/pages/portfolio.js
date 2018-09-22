import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

class PortfolioPage extends Component {
  render() {
    return (
      <Layout>
        <div className="main">
          <div id="top">
            <p></p>
          </div>
          <div id="about">
            <p className="title">Portfolio</p>
            <br></br>
            <br></br>
            <p>Waddup, it's the portfolio page!</p>
          </div>
        </div>
      </Layout>
    )
  }
}
export default PortfolioPage;

