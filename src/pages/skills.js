import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import '../components/sidebar.css'
import HTMLPic from '../images/html.png'
import CSSPic from '../images/css.png'
import PHPPic from '../images/php.png'
import AlexaPic from '../images/aws.png'
import JSPic from '../images/js.png'
import PythonPic from '../images/python.png'
import SEOPic from '../images/seo.png'
import ReactPic from '../images/react.png'
import CircularProgressbar from 'react-circular-progressbar';


class SkillsPage extends Component {
  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <div className="flex column sidebar-img">
            <Sidebar pageTitle={'Skills'}/>
            <img className="contact-img image grow" alt="profile picture" src={require('../images/profile_picture.png')}></img>
          </div>
          <br></br>
          <br></br>
          <p className='center'>My skills are listed below in order of confidence. Keep scrolling for certificates and achievements.</p>
          <br></br>
          <div className="main flex skills-table column">
            <div id="about" className='mobile-ver'>
              <tr>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={HTMLPic}/>
                      <CircularProgressbar
                        percentage={100}
                        textForPercentage={null}
                      />
                  </div>
                </td>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={CSSPic}/>
                    <CircularProgressbar
                      percentage={90}
                      textForPercentage={null}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={AlexaPic}/>
                    <CircularProgressbar
                      percentage={70}
                      textForPercentage={null}
                    />
                  </div>
                </td>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={JSPic}/>
                    <CircularProgressbar
                      percentage={50}
                      textForPercentage={null}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={ReactPic}/>
                    <CircularProgressbar
                      percentage={35}
                      textForPercentage={null}
                    />
                  </div>
                </td>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={SEOPic}/>
                    <CircularProgressbar
                      percentage={25}
                      textForPercentage={null}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={PythonPic}/>
                    <CircularProgressbar
                      percentage={30}
                      textForPercentage={null}
                    />
                  </div>
                </td>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={PHPPic}/>
                    <CircularProgressbar
                      percentage={15}
                      textForPercentage={null}
                    />
                  </div>
                </td>
              </tr>
            </div>

            <div id="about" className='desktop-ver flex'>
              <tr>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={HTMLPic}/>
                    <CircularProgressbar
                      percentage={100}
                      textForPercentage={null}
                    />
                  </div>
                </td>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={CSSPic}/>
                    <CircularProgressbar
                      percentage={90}
                      textForPercentage={null}
                    />
                  </div>
                </td>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={AlexaPic}/>
                    <CircularProgressbar
                      percentage={70}
                      textForPercentage={null}
                    />
                  </div>
                </td>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={JSPic}/>
                    <CircularProgressbar
                      percentage={50}
                      textForPercentage={null}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={ReactPic}/>
                    <CircularProgressbar
                      percentage={35}
                      textForPercentage={null}
                    />
                  </div>
                </td>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={SEOPic}/>
                    <CircularProgressbar
                      percentage={25}
                      textForPercentage={null}
                    />
                  </div>
                </td>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={PythonPic}/>
                    <CircularProgressbar
                      percentage={30}
                      textForPercentage={null}
                    />
                  </div>
                </td>
                <td>
                  <div className='CircularProgressbar-wrapper flex'>
                    <img className='CircularProgressbar-img' src={PHPPic}/>
                    <CircularProgressbar
                      percentage={15}
                      textForPercentage={null}
                    />
                  </div>
                </td>
              </tr>
            </div>

          </div>
        </div>
      </Layout>
    )
  }
}
export default SkillsPage;

