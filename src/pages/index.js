import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'

class HomePage extends Component {
  render() {
    return (
        <Layout>
          <div className='wrapper flex column'>
            <div className="flex column sidebar-img">
            <Sidebar pageTitle={<p className='index-title index-name'>Stephy</p>} letterX={<img className="index-title index-x" alt="letter x" src={require('../images/x.png')}></img>}/>
            <img className="contact-img image" alt="contact-img" src={require('../images/profile_picture.png')}></img>
            </div>
              <div className="main">
              <div id="about">
                <p className="title">Front-End Developer</p>
                <br></br>
                <br></br>
                <p>An ambitious Front-End Web Developer bringing a broad skill range in both website design and
                  development.</p>
                  <br></br>
                  <p><b>Please note that this website is currently under development.</b></p>
                  <br></br>
                  <p><b>Currently learning: React.js</b></p>
              </div>
            </div>
          </div>
        </Layout>
    )
  }
}
export default HomePage;

