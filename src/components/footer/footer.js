import React from "react"
import { StaticQuery, graphql } from "gatsby"

import styles from "./footer.module.scss"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo_small.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <footer className={styles.footerWrapper}>
        <div className={`container ${styles.footerContainer}`}>
          <div className="row">
            <div className={`col-md-3 ${styles.sectionWrapper}`}>
              <h3 className={styles.sectionTitle}>O nas</h3>
              <p>
                Jesteśmy inicjatywą mającą na celu edukację programistów z
                dowolnym doświadczeniem w zakresie najpopularniejszego na
                świecie systemu kontroli wersji - git.
              </p>
            </div>
            <div className={`col-md-3 ${styles.sectionWrapper}`}>
              <h3 className={styles.sectionTitle}>Strona</h3>
              <ul className={styles.sectionList}>
                <li>
                  <a href="/">O Nas</a>
                </li>
                <li>
                  <a href="/events">Wydarzenia</a>
                </li>
                <li>
                  <a href="/workshops">Warsztaty</a>
                </li>
                <li>
                  <a href="/organizers">Organizatorzy</a>
                </li>
                <li>
                  <a href="/contact">Kontakt</a>
                </li>
              </ul>
            </div>
            <div className={`col-md-3 ${styles.sectionWrapper}`}>
              <h3 className={styles.sectionTitle}>GDPR</h3>
              <ul className={styles.sectionList}>
                <li>
                  <a href="/privacy-policy">Polityka Prywatności</a>
                </li>
                <li>
                  <a href="/terms-of-service">Regulamin</a>
                </li>
                <li>
                  <a href="/cookies">Polityka Cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`container-fluid ${styles.copyrightContainer}`}>
          <div className="row">
            <div className={`col-md-12 ${styles.copyrightNote}`}>
              © Wszystkie prawa zastrzeżone
            </div>
          </div>
        </div>
      </footer>
    )}
  />
)

export default Footer
