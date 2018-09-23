import React, { Component } from 'react'
import Layout from '../components/layout'
import SidebarTop from '../components/sidebar-top.js'
import Footer from '../components/footer.js'
import '../components/sidebar-top.css'
import '../components/footer.css'

class AboutPage extends Component {
  state = {
    pageTitle: 'About',
  }

  componentDidMount() {
    console.log(this.pageTitle)
  }

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
              <p className="title">{ this.state.pageTitle }</p>
              <br></br>
              <br></br>
              <p>Writing about me and why I love web stuff ^_^</p>
            </div>
          </div>
          <Footer/>
        </div>
      </Layout>
    )
  }
}
export default AboutPage;

