import React, { Component } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar.js'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../components/sidebar.css'

class ExperiencePage extends Component {
  render() {
    return (
      <Layout>
        <div className='wrapper flex column'>
          <Sidebar pageTitle={'Experience'}/>
        <div className="main">
          <div id="top">
            <p></p>
          </div>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="September 2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<Icon/>}
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
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
                // icon={<Icon/>}
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
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<Icon/>}
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
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<Icon/>}
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
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<Icon/>}
              >
                <h3 className="vertical-timeline-element-title">Freelance Work</h3>
                <h4 className="vertical-timeline-element-subtitle">Bespoke Website - Garden Furniture</h4>
                <p>
                  <a href="http://brdfurniture.co.uk/">http://brdfurniture.co.uk/</a>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
                // icon={<Icon/>}
              >
                <h3 className="vertical-timeline-element-title small-title">Self-Teaching</h3>
                <h4 className="vertical-timeline-element-subtitle small-title">CSS Grid and Flexbox</h4>
                <p className={"small-p"}>
                  User Experience, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<Icon/>}
              >
                <h3 className="vertical-timeline-element-title">Freelance Work</h3>
                <h4 className="vertical-timeline-element-subtitle">Bespoke Website - Landscaping</h4>
                <p>
                  <a href="http://aberlandscaping.co.uk/">http://aberlandscaping.co.uk/</a>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<Icon/>}
              >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                  Strategy, Social Media
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<Icon/>}
              >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                  Creative Direction, User Experience, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<Icon/>}
              >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                  Creative Direction, Visual Design
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<Icon/>}
              />
            </VerticalTimeline>
        </div>
        </div>
      </Layout>
    )
  }
}
export default ExperiencePage;

