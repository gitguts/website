import React, { Component } from "react"
import PropTypes from "prop-types"

import NameBanner from "../name-banner/name-banner"

import styles from "./workshop.module.scss"

class Workshop extends Component {
  render() {
    return (
      <>
        <NameBanner name={`Warsztaty`} />

        <div className={`container ${styles.container}`}>
          <div className={`row ${styles.contentRow}`}>
            <div className={`col-12`}>
              <h3 className={`${styles.title}`}>{this.props.workshop.name}</h3>
            </div>
            <div className={`col-12`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.workshop.description.html,
                }}
              />
            </div>
            <div className={`col-12 ${styles.resources}`}>
              <span>Zasoby:</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.workshop.materials}
              >
                Materiały
              </a>
              ,
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.workshop.prework}
              >
                Prework
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

Workshop.propTypes = {
  workshop: PropTypes.object.isRequired,
}

export default Workshop
