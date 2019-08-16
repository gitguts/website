import React from "react"

import Layout from "../components/layout/layout"

import styles from "./404.module.scss"

const NotFoundPage = () => (
  <Layout>
    <div className={`container ${styles.container}`}>
      <div className="row">
        <div className={`col-md-12 ${styles.notFoundIcon}`}>
          <i className="fa fa-frown-o"></i>
        </div>
      </div>
      <div className="row">
        <div className={`col-md-12 ${styles.notFoundBlock}`}>
          <p>Błąd 404</p>
        </div>
      </div>
      <div className="row">
        <div className={`col-md-12 ${styles.notFoundCaption}`}>
          <p>Przepraszamy ale nie możemy odnaleźć wskazanej strony.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
