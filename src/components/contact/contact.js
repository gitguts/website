import React, { Component } from "react"

import styles from "./contact.module.scss"

export default class Contact extends Component {
  render() {
    return (
      <>
        <form name="contact" method="POST" netlify-honeypot="bot-field" netlify>
          <div className={`container ${styles.container}`}>
            <div className={`row`}>
              <div className={`col-lg-6 offset-lg-3 col-sm-12`}>
                <h5 className={styles.header}>Formularz kontaktowy</h5>
              </div>
            </div>
            <div className={`row`}>
              <div className={`col-lg-6 offset-lg-3 col-sm-12`}>
                <span className={styles.hidden}>
                  <label>
                    Don’t fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </span>
                <div className={styles.element}>
                  <div className={styles.wrapper}>
                    <input
                      type="text"
                      name="name"
                      size="40"
                      className={styles.input}
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Imię"
                      required
                    />
                  </div>
                </div>
                <div className={styles.element}>
                  <div className={styles.wrapper}>
                    <input
                      type="email"
                      name="email"
                      size="40"
                      className={styles.input}
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className={styles.element}>
                  <div className={styles.wrapper}>
                    <textarea
                      name="message"
                      className={styles.input}
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Wiadomość"
                      cols="40"
                      rows="10"
                      required
                    />
                  </div>
                </div>
                <div className={styles.element}>
                  <div className={styles.wrapper}>
                    <button type="submit" className={styles.submit}>
                      Wyślij
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    )
  }
}
