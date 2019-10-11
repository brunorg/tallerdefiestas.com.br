import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SocialPage = () => (
  <Layout>
    <SEO title="Page Social" />
    <h1>Hi from the Social page</h1>
    <p>Welcome to page Social</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SocialPage
