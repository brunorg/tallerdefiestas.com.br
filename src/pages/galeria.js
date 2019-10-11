import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GaleriaPage = () => (
  <Layout>
    <SEO title="Page Galeria" />
    <h1>Hi from the Galeria page</h1>
    <p>Welcome to page Galeria</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GaleriaPage
