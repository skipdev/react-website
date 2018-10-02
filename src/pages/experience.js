import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/timeline.css'
import '../components/sidebar.css'

class ExperiencePage extends Component {
  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <div className="flex column sidebar-img">
          <Sidebar pageTitle={'Experience'}/>
          <img className="contact-img image" alt="contact-img" src={require('../images/profile_picture.png')}></img>
          </div>
          <div className="main">
          <div id="top">
            <p></p>
          </div>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--self-teaching"
                date="September 2018"
                iconStyle={{ background: '#38cdff', color: '#fff' }}
                icon=<img className='icon-img' src={require('../images/react-logo.png')}></img>
              >
                <h3 className="vertical-timeline-element-title small-title">Self-Teaching</h3>
                <h4 className="vertical-timeline-element-subtitle small-title">React.js / Gatsby.js</h4>
                <p className={'small-p'}>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="September 2018"
                iconStyle={{ background: '#38cdff', color: '#fff'}}
                icon=<img className='icon-img' src={require('../images/solent-logo.png')}></img>
              >
                <h3 className="vertical-timeline-element-title">2nd Year</h3>
                <h4 className="vertical-timeline-element-subtitle">Solent University</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="September 2018"
                iconStyle={{ background: '#38cdff', color: '#fff' }}
                icon=<img className='icon-img' src={require('../images/seo-icon.png')}></img>
              >
                <h3 className="vertical-timeline-element-title">Freelance Work</h3>
                <h4 className="vertical-timeline-element-subtitle">SEO Optimisation</h4>
                <p>
                  <a href="https://northhertsjoinery.com/">https://northhertsjoinery.com/</a>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="June - September 2018"
                iconStyle={{ background: '#38cdff', color: '#fff' }}
                icon=<img className='icon-img' src={require('../images/cube-logo.png')}></img>
              >
                <h3 className="vertical-timeline-element-title">Front-end Development</h3>
                <h4 className="vertical-timeline-element-subtitle">3 SIDED CUBE</h4>
                <p>
                  User Experience, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May - June 2018"
                iconStyle={{ background: '#38cdff', color: '#fff' }}
                icon=<img className='icon-img' src={require('../images/website-icon.png')}></img>
              >
                <h3 className="vertical-timeline-element-title">Freelance Work</h3>
                <h4 className="vertical-timeline-element-subtitle">Bespoke Website - Garden Furniture</h4>
                <p>
                  <a href="http://brdfurniture.co.uk/">http://brdfurniture.co.uk/</a>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2018"
                iconStyle={{ background: '#38cdff', color: '#fff'}}
                icon=<img className='icon-img' src={require('../images/css-logo.png')}></img>
              >
                <h3 className="vertical-timeline-element-title small-title">Self-Teaching</h3>
                <h4 className="vertical-timeline-element-subtitle small-title">CSS Grid and Flexbox</h4>
                <p className={"small-p"}>
                  User Experience, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="April 2018"
                iconStyle={{ background: '#38cdff', color: '#fff' }}
                icon=<img className='icon-img' src={require('../images/website-icon.png')}></img>
              >
                <h3 className="vertical-timeline-element-title">Freelance Work</h3>
                <h4 className="vertical-timeline-element-subtitle">Bespoke Website - Landscaping</h4>
                <p>
                  <a href="http://aberlandscaping.co.uk/">http://aberlandscaping.co.uk/</a>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="September 2017"
                iconStyle={{ background: '#38cdff', color: '#fff' }}
                icon=<img className='icon-img' src={require('../images/solent-logo.png')}></img>
              >
                <h3 className="vertical-timeline-element-title">Year 1</h3>
                <h4 className="vertical-timeline-element-subtitle">Solent University</h4>
                <p>
                  Strategy, Social Media
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        </div>
      </Layout>
    )
  }
}
export default ExperiencePage;

