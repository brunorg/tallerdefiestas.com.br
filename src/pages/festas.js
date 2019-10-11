import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FestasPage = () => (
  <Layout>
    <SEO title="Page Festas" />
    <h1>Hi from the Festas page</h1>
    <p>Welcome to page Festas</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FestasPage
