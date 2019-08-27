import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"

import styles from "./events.module.scss"

const parseEventDay = event => {
  const date = new Date(Date.parse(event.startTime))

  return date.toLocaleDateString("pl-PL", {
    year: "numeric",
    day: "numeric",
    month: "long",
  })
}

const parseCMSDate = value => {
  const dateStr = `${value.substring(0, value.length - 1)}`
  const dateParts = dateStr.split("T")

  return new Date(Date.parse(`${dateParts[0]} ${dateParts[1]} GMT+0200`))
}

const parseEventTime = event => {
  const startDate = parseCMSDate(event.startTime)
  const endDate = parseCMSDate(event.endTime)

  const startTime = startDate.toLocaleTimeString("pl-PL", {
    hourCycle: "h24",
    hour: "numeric",
    minute: "numeric",
  })

  const endTime = endDate.toLocaleTimeString("pl-PL", {
    hourCycle: "h24",
    hour: "numeric",
    minute: "numeric",
  })

  return `${startTime} - ${endTime}`
}

export default class Events extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            placeholderImage: file(
              relativePath: { eq: "page-title-background.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            graphCMSData {
              events(where: { status: PUBLISHED }, orderBy: startTime_DESC) {
                id
                startTime
                endTime
                participants
                facebook
                evenea
                address {
                  country
                  city
                  street
                  name
                  zipCode
                }
                workshop {
                  name
                  slug
                  description {
                    html
                  }
                  slug
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <div
              className={`container-fluid ${styles.bannerContainer}`}
              style={{
                backgroundImage: `url(${data.placeholderImage.childImageSharp.fluid.src})`,
              }}
            >
              <div className={`container`}>
                <div className={`row`}>
                  <div className={`col-md-12 ${styles.name}`}>Wydarzenia</div>
                </div>
              </div>
            </div>
            <div className={`container ${styles.container}`}>
              {data.graphCMSData.events.map(event => (
                <>
                  <div className={`row ${styles.wrapperRow}`}>
                    <div className={`col-sm-12 col-md-3 ${styles.date}`}>
                      <div className={styles.dateInner}>
                        {parseEventDay(event)}
                      </div>
                      <div className={styles.dateInner}>
                        {parseEventTime(event)}
                      </div>
                    </div>
                    <div className={`col-sm-12 col-md-9 ${styles.address}`}>
                      <div>{event.address.name}</div>
                      <div>
                        {event.address.street} {event.address.zipCode},{" "}
                        {event.address.city}
                      </div>
                    </div>
                  </div>
                  <div className={`row ${styles.contentRow}`}>
                    <div className={`col-12`}>
                      <h3 className={`${styles.title}`}>
                        <a href={`/workshops/${event.workshop.slug}`}>
                          {event.workshop.name}
                        </a>
                      </h3>
                    </div>
                    <div className={`col-12`}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: event.workshop.description.html,
                        }}
                      ></div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        )}
      />
    )
  }
}
