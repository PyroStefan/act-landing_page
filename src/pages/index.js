import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Aperturect CT" />
    <h1>Aperturect Computer Technologies</h1>
    <p>We are the company to bring other Surinamese companies into the 21st century, thereby propelling the country forward.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <a href="support@aperturect.com">Mail Us!</a>
  </Layout>
)

export default IndexPage
