import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This page doesn't exist</p><br />
    <Link to="/index/">Homepage</Link>
  </Layout>
)

export default NotFoundPage
