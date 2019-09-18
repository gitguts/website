import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import { SocialIcon } from "react-social-icons"

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

const parseCMSDate = value => {
  const dateStr = `${value.substring(0, value.length - 1)}`
  const dateParts = dateStr.split("T")

  return new Date(Date.parse(`${dateParts[0]} ${dateParts[1]}`))
}

const parseEventTime = event => {
  const startDate = parseCMSDate(event.startTime)
  const endDate = parseCMSDate(event.endTime)

  startDate.setHours(startDate.getHours() + 2)
  endDate.setHours(endDate.getHours() + 2)

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
                    {event.address.street} {event.address.zipCode},{" "}
                    {event.address.city}
                  </div>
                  <div className={`col-12 ${styles.eventInfo}`}>
                    <i className={`fa fa-user ${styles.icon}`} />
                    {event.participants}
                  </div>
                  <div className={`col-12 ${styles.eventInfo}`}>
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
