import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"

import styles from "./home-banner.module.scss"

const countCities = events => {
  const cities = events
    .filter(event => event.address && event.address.city)
    .map(event => event.address.city)

  return Array.from(new Set(cities)).length
}

const countParticipants = events =>
  events.reduce(
    (previousValue, event) => previousValue + event.participants || 0,
    0
  )

const getUniqueCities = events => {
  const cities = events
    .filter(event => event.address && event.address.city)
    .map(event => event.address.city)

  return Array.from(new Set(cities)).sort()
}

const getCitiesDescription = events => {
  const count = countCities(events)

  switch (count) {
    case 1:
      return `1 miasto`
    case 2:
    case 3:
    case 4:
      return `${count} miasta`
    default:
      return `${count} miast`
  }
}

export default class HomeBanner extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(
              relativePath: { eq: "lublin_workshop_2.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            graphCMSData {
              events {
                address {
                  city
                }
                participants
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
                      {getCitiesDescription(data.graphCMSData.events)}
                    </div>
                  </div>

                  <div className={`row`}>
                    <div className={`col-md-12 ${styles.title}`}>
                      {countParticipants(data.graphCMSData.events)} uczestników
                    </div>
                  </div>

                  <div className={`row`}>
                    <div className={`col-md-12 ${styles.cities}`}>
                      {getUniqueCities(data.graphCMSData.events).map(
                        (city, index, cities) => (
                          <span key={index}>
                            {city} {index < cities.length - 1 ? " / " : ""}
                          </span>
                        )
                      )}
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
