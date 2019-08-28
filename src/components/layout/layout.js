import React from "react"
import Helmet from "react-helmet"

import Header from "../header/header"
import Footer from "../footer/footer"

import image from "../../images/logo_full.png"
import styles from "./layout.module.scss"

const Layout = ({ children }) => (
  <>
    <Helmet
      title="Git Guts"
      meta={[
        {
          name: "description",
          content:
            "Jesteśmy inicjatywą mającą na celu edukację programistów z dowolnym doświadczeniem w zakresie " +
            "najpopularniejszego na świecie systemu kontroli wersji - git.",
        },
        { name: "og:title", content: "Git Guts" },
        { name: "og:site_name", content: "gitguts.io" },
        { name: "og:url", content: "https://www.gitguts.io" },
        {
          name: "og:description",
          content:
            "Jesteśmy inicjatywą mającą na celu edukację programistów z dowolnym doświadczeniem w zakresie " +
            "najpopularniejszego na świecie systemu kontroli wersji - git.",
        },
        {
          name: "og:image",
          content: image,
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <div className={styles.bodyWrapper}>
      <div className={`container-fluid ${styles.mainContainer}`}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  </>
)

export default Layout
