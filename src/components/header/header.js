import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./header.module.scss"

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const showMenu = !this.state.showMenu
    this.setState({ showMenu: showMenu })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "logo.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <div className={`container ${styles.container}`}>
            <div className="row">
              <div className="col-md-3">
                <a href="/">
                  <div className={styles.imageWrapper}>
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                  </div>
                </a>
                <i
                  onClick={this.handleClick}
                  className={`fa fa-bars ${styles.menuIcon}`}
                />
              </div>
              <div className="col-md-9">
                <div className={styles.navigationWrapper}>
                  <nav>
                    <ul
                      className={`${styles.menu} ${
                        this.state.showMenu ? `${styles.menuActive}` : ""
                      }`}
                    >
                      <li className={styles.menuItem}>
                        <a href="/">O Nas</a>
                      </li>
                      <li className={styles.menuItem}>
                        <a href="/events">Wydarzenia</a>
                      </li>
                      <li className={styles.menuItem}>
                        <a href="/workshops">Warsztaty</a>
                      </li>
                      <li className={styles.menuItem}>
                        <a href="/organizers">Organizatorzy</a>
                      </li>
                      <li className={styles.menuItem}>
                        <a href="/contact">Kontakt</a>
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
  }
}
