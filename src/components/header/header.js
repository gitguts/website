import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./header.module.scss"

const Header = () => (
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
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <a href="/">
              <div className={styles.imageWrapper}>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </div>
            </a>
          </div>
          <div className="col-md-9">
            <div className={styles.navigationWrapper}>
              <nav>
                <ul className={styles.menu}>
                  <li className={styles.menuItem}>
                    <a href="/">Wydarzenia</a>
                  </li>
                  <li className={styles.menuItem}>
                    <a href="/">Warsztaty</a>
                  </li>
                  <li className={styles.menuItem}>
                    <a href="/">Organizatorzy</a>
                  </li>
                  <li className={styles.menuItem}>
                    <a href="/">Kontakt</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )}
  />
)

export default Header
