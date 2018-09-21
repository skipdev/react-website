import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ThirdPage = () => (
  <Layout>
    <h1>Hi from the experience page</h1>
    <p>Welcome to experiences</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
