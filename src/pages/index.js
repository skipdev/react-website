import React, { Component } from 'react'
import { Link } from 'gatsby'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'

class HomePage extends Component {
  // myName = 'Stephy'

  componentDidMount() {
    console.log('Render')
  }

  render() {
    return (
      <Layout>
        <p>helloo its the home page</p>
      </Layout>
    )
  }
}
export default HomePage;

