import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { SocialIcon } from "react-social-icons"

import styles from "./organizers.module.scss"

export default class Organizers extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            cloudCorridorLogo: file(
              relativePath: { eq: "logo_cloudcorridor.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            infoShareLogo: file(relativePath: { eq: "logo_infoshare.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <>
              <div className={`container ${styles.container}`}>
                <div className={`row`}>
                  <div className={`col-md-12`}>
                    <h3 className={styles.pageTitle}>Organizatorzy</h3>
                  </div>
                </div>
                <div className={`row`}>
                  <div className={`col-md-12`}>
                    <div className={styles.wrapper}>
                      <div className={styles.imageWrapper}>
                        <Img
                          fluid={data.cloudCorridorLogo.childImageSharp.fluid}
                        />
                      </div>
                      <div className={styles.content}>
                        <p className={styles.text}>
                          Polsko-amerykańska firma działająca na rynku od 2017
                          roku. Specjalizuje się w wytwarzaniu oprogramowania
                          dla klientów chcących rozwijać swoje produkty i usługi
                          w chmurze, z użyciem nowoczesnych, sprawdzonych
                          rozwiązań. Za dostarczanie rozwiązań w sektorze IT na
                          rynku amerykańskim oraz w Nowej Zelandi odpowiedzialny
                          jest zespół doświadczonych programistów, pełniących w
                          swoich karierach role deweloperów, architektów,
                          konsultantów, szkoleniowców oraz DevOps.
                        </p>
                      </div>
                      <div>
                        <SocialIcon
                          bgColor="black"
                          style={{
                            height: "2rem",
                            width: "2rem",
                            cursor: "pointer",
                            marginRight: "0.5rem",
                          }}
                          url={`https://www.cloudcorridor.com`}
                        />
                        <SocialIcon
                          bgColor="black"
                          style={{
                            height: "2rem",
                            width: "2rem",
                            cursor: "pointer",
                            marginRight: "0.5rem",
                          }}
                          url={`https://www.facebook.com/cloudcorridorcom`}
                        />
                        <SocialIcon
                          bgColor="black"
                          style={{
                            height: "2rem",
                            width: "2rem",
                            cursor: "pointer",
                            marginRight: "0.5rem",
                          }}
                          url={`https://www.linkedin.com/company/cloudcorridor`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`row`}>
                  <div className={`col-md-12`}>
                    <div className={styles.wrapper}>
                      <div className={styles.imageWrapper}>
                        <Img fluid={data.infoShareLogo.childImageSharp.fluid} />
                      </div>
                      <div className={styles.content}>
                        <p className={styles.text}>
                          Szkoła programowania założona w maju 2015 roku.
                          Jesteśmy jedną z największych akademii IT w Polsce z
                          oddziałami w kilku miastach. Prowadzimy intensywne
                          warsztaty z zakresu front-end, back-end (w tym Java,
                          Python), Data Science, a także zwinnych metodyk
                          prowadzenia projektów. Uczymy programowania od podstaw
                          i przygotowujemy naszych absolwentów do wejścia na
                          rynek IT. Stawiamy na wysoką jakość prowadzonych
                          szkoleń, dzięki czemu mamy pewność, że firmy zyskują
                          dobrze przygotowanych do pracy Junior Developerów.
                          Dotychczas przeszkoliliśmy ponad 650 osób, z czego 96%
                          absolwentów, którzy znaleźli pracę, utrzymuje się na
                          rynku IT.
                        </p>
                      </div>
                      <div>
                        <SocialIcon
                          bgColor="black"
                          style={{
                            height: "2rem",
                            width: "2rem",
                            cursor: "pointer",
                            marginRight: "0.5rem",
                          }}
                          url={`https://infoshareacademy.com`}
                        />
                        <SocialIcon
                          bgColor="black"
                          style={{
                            height: "2rem",
                            width: "2rem",
                            cursor: "pointer",
                            marginRight: "0.5rem",
                          }}
                          url={`https://www.facebook.com/infoshareacademy`}
                        />
                        <SocialIcon
                          bgColor="black"
                          style={{
                            height: "2rem",
                            width: "2rem",
                            cursor: "pointer",
                            marginRight: "0.5rem",
                          }}
                          url={`https://www.instagram.com/infoshareacademy`}
                        />
                        <SocialIcon
                          bgColor="black"
                          style={{
                            height: "2rem",
                            width: "2rem",
                            cursor: "pointer",
                            marginRight: "0.5rem",
                          }}
                          url={`https://www.linkedin.com/company/infoshare-academy`}
                        />
                      </div>
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
