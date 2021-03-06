import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import { SocialIcon } from "react-social-icons"
import * as moment from "moment"

import styles from "./events.module.scss"
import NameBanner from "../name-banner/name-banner"

const parseEventDay = event => {
  const date = new Date(Date.parse(event.startTime))

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "long",
  })
}

const parseEventTime = event => {
  const startDate = moment(event.startTime).toDate()
  const endDate = moment(event.endTime).toDate()

  const startTime = startDate.toLocaleTimeString("en-US", {
    hourCycle: "h24",
    hour: "numeric",
    minute: "numeric",
  })

  const endTime = endDate.toLocaleTimeString("en-US", {
    hourCycle: "h24",
    hour: "numeric",
    minute: "numeric",
  })

  return `${startTime} - ${endTime}`
}

const parseEventAddress = event => {
  if (!event.address.street) {
    return `Webinar`
  }

  return `${event.address.street} ${event.address.zipCode}, ${event.address.city}`
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
            <NameBanner name={`Wydarzenia`} />

            <div className={`container ${styles.container}`}>
              {data.graphCMSData.events.map(event => (
                <div className={`row ${styles.contentRow}`} key={event.id}>
                  <div className={`col-12`}>
                    <h3 className={`${styles.title}`}>
                      <a href={`/workshops/${event.workshop.slug}`}>
                        {event.workshop.name}
                      </a>
                    </h3>
                  </div>
                  <div className={`col-12 ${styles.eventInfo}`}>
                    <i className={`fa fa-clock-o ${styles.icon}`} />
                    {parseEventDay(event)} {parseEventTime(event)}
                  </div>
                  <div className={`col-12 ${styles.eventInfo}`}>
                    <i className={`fa fa-location-arrow ${styles.icon}`} />
                    {parseEventAddress(event)}
                  </div>
                  {event.participants && event.participants > 0 && (
                    <div className={`col-12 ${styles.eventInfo}`}>
                      <i className={`fa fa-user ${styles.icon}`} />
                      {event.participants}
                    </div>
                  )}
                  <div className={`col-12 ${styles.eventInfo}`}>
                    {event.facebook && (
                      <SocialIcon
                        bgColor="black"
                        style={{
                          height: "1.5rem",
                          width: "1.5rem",
                          cursor: "pointer",
                          marginRight: "0.5rem",
                        }}
                        url={event.facebook}
                      />
                    )}
                    {event.evenea && (
                      <SocialIcon
                        bgColor="black"
                        style={{
                          height: "1.5rem",
                          width: "1.5rem",
                          cursor: "pointer",
                          marginRight: "0.5rem",
                        }}
                        url={event.evenea}
                      />
                    )}
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
