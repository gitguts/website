import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"

import styles from "./home-newsletter.module.scss"

export default class HomeNewsletter extends Component {
  state = { email: "" }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  submit = async e => {
    e.preventDefault()

    try {
      const result = await addToMailchimp(this.state.email, {})

      if (result && result.result === "success") {
        window.location = "/newsletter"
      } else {
        console.error(result.msg)
      }
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "coutdown.jpg" }) {
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
                <div className={`row ${styles.title}`}>
                  <div className={`col-md-12`}>
                    <h4>Zapisz się do newslettera</h4>
                  </div>
                </div>

                <div className={`row`}>
                  <div className={`col-md-12`}>
                    <form
                      method="POST"
                      className={styles.formWrapper}
                      onSubmit={this.submit}
                    >
                      <input
                        className={styles.email}
                        type="email"
                        name="email"
                        size="30"
                        required={true}
                        placeholder="Adres email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />

                      <input
                        className={styles.submit}
                        type="submit"
                        value="Zapisz"
                      />
                    </form>
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
