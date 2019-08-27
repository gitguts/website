import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import styles from "./name-banner.module.scss"

class NameBanner extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(
              relativePath: { eq: "page-title-background.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <>
              <div
                className={`container-fluid ${styles.container}`}
                style={{
                  backgroundImage: `url(${data.placeholderImage.childImageSharp.fluid.src})`,
                }}
              >
                <div className={`container`}>
                  <div className={`row`}>
                    <div className={`col-md-12 ${styles.name}`}>
                      {this.props.name}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }}
      />
    )
  }
}

NameBanner.propTypes = {
  name: PropTypes.string.isRequired,
}

export default NameBanner
