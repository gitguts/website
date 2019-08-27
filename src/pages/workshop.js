import React from "react"

import Layout from "../components/layout/layout"
import Workshop from "../components/workshop/workshop"

const WorkshopPage = ({ pageContext }) => (
  <Layout>
    <Workshop workshop={pageContext.workshop} />
  </Layout>
)

export default WorkshopPage
