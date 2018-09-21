import React from 'react'

const Header = ({ siteTitle }) => (
  <head>
    <meta charSet="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"></link>
    <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
    <title>{siteTitle}</title>
  </head>
)

export default Header