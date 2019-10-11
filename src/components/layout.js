/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../assets/scss/main.scss"

const Layout = ({loading, isArticleVisible, children, location }) => {
  // let content

  // if (location && location.pathname === "/") {
  //   content = <div>{children}</div>
  // } else {
  //   content = (
  //     <div id="wrapper" className="page">
  //       <div>{children}</div>
  //     </div>
  //   )
  // }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className={`body ${loading} ${isArticleVisible ? "is-article-visible" : ""}`}>
          <div id="wrapper">
            <Header timeout={false} onOpenArticle={() => {}} siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}>
              <main>{children}</main>
            </div>
            <Footer />
          </div>
          <div id="bg" />
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
