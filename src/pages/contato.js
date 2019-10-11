import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContatoPage = () => (
  <Layout>
    <SEO title="Page Contato" />
    <h1>Hi from the contato page</h1>
    <p>Welcome to page contato</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContatoPage
