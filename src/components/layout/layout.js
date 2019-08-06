import React from "react"

import Header from "../header/header"
import Footer from "../footer/footer"

import styles from "./layout.module.scss"

const Layout = ({ children, title }) => (
  <div className={styles.bodyWrapper}>
    <div className={`container-fluid ${styles.mainContainer}`}>
      <Header />

      <Footer />
    </div>
  </div>
)

export default Layout
