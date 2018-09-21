import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about/">Go to about page</Link>
    <br></br>
    <Link to="/experience/">Go to experiences</Link>
    <br></br>
    <Link to="/portfolio/">Go to portfolio</Link>
    <br></br>
    <Link to="/contact/">Go to contact</Link>
  </Layout>
)

export default IndexPage
