import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import '../components/sidebar.css'
import Pic1 from '../images/work-coding.jpeg'
import Pic2 from '../images/work-design.jpeg'

class PortfolioPage extends Component {
  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <div className="flex column sidebar-img">
          <Sidebar pageTitle={'Work'}/>
          <img className="contact-img image grow" alt="profile picture" src={require('../images/profile_picture.png')}></img>
          </div>
          <div className="main flex table column">
            <div id="about">
              <tr>
                <td><a href='https://github.com/stephyx'><img className="work-img" src={Pic1}></img></a></td>
                <td><a href='https://www.behance.net/stephyx'><img className="work-img" src={Pic2}></img></a></td>
              </tr>
              <div className='work-text flex row'>
                <p id='code'>Code</p>
                <p id='design'>Design</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default PortfolioPage;

