import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"

import NameBanner from "../name-banner/name-banner"

import styles from "./workshops.module.scss"

export default class Events extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            graphCMSData {
              workshops {
                id
                name
                slug
                description {
                  html
                }
                materials
                prework
              }
            }
          }
        `}
        render={data => (
          <>
            <NameBanner name={`Warsztaty`} />

            <div className={`container ${styles.container}`}>
              {data.graphCMSData.workshops.map(workshop => (
                <div className={`row`} key={workshop.id}>
                  <div className={`col-12`}>
                    <div className={styles.wrapper}>
                      <div className={styles.titleWrapper}>
                        <h3 className={`${styles.title}`}>
                          <a href={`/workshops/${workshop.slug}`}>
                            {workshop.name}
                          </a>
                        </h3>
                      </div>
                      <div className={styles.content}>
                        <div
                          className={styles.text}
                          dangerouslySetInnerHTML={{
                            __html: `<div>${workshop.description.html}</div>`,
                          }}
                        />
                      </div>
                      <div className={`${styles.resources}`}>
                        <span>Zasoby:</span>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={workshop.materials}
                        >
                          Materiały
                        </a>
                        ,
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={workshop.prework}
                        >
                          Prework
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      />
    )
  }
}
