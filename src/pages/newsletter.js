import React from "react"

import styles from "./newsletter.module.scss"

const NewsletterPage = () => (
  <div className={`container-fluid ${styles.container}`}>
    <div className={`container ${styles.innerContainer}`}>
      <div className={`row`}>
        <div className={`col-md-6 ${styles.wrapper}`}>
          <h1 className={styles.header}>Git Guts</h1>
          <div className={styles.message}>
            Wielkie dzięki za zainteresowanie naszym newsletterem! Będziemy
            informować Cię na bieżąco o nowościach w projekcie Git Guts takich
            jak warsztaty, prelekcje czy też projekty Open Source.
          </div>
          <p className={styles.linkWrapper}>
            <a href="/">Powrót</a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default NewsletterPage
