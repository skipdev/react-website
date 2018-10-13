import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import '../components/sidebar.css'

class AboutPage extends Component {
render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <div className="flex column sidebar-img">
          <Sidebar pageTitle={'About'}/>
          <img className="contact-img image" alt="contact-img" src={require('../images/profile_picture.png')}></img>
          </div>
          <div className="main">
            <div id="top">
              <p></p>
            </div>
            <div id="about">
              <p><span className="dark">My name is Skip, and I'm a front-end developer, currently studying Web Design and Development at Solent University.</span>
                <br></br>
                <br></br>
                I am very passionate about <span className="dark">tech for good</span>, and creating technical solutions to problems that can have a big positive impact on people.
                I hold a <span className="dark">Subsidiary Diploma in Software Development</span> at Distinction*, which I obtained from studying at Sussex Downs College. I also hold A-levels in Computing and Biology, and an AS in Maths. From secondary school education, I gained <span class="dark">6 A grade and 4 B grade GCSEs.</span>
                <br></br>
                <br></br>
                I believe that I am a very open-minded individual, up for working on pretty much anything. I feel confident when taking on challenges, and actively seek out new ways to challenge myself. I'm also willing to work hard to achieve my goals, and enjoy working on a large range of different projects, from simple websites to Alexa skills.</p>
                <br></br>
              <p>You can read my blogs <a href='https://medium.com/@stephyx'>here.</a></p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default AboutPage;

