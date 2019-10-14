import React, { useState } from "react"

import styles from "./contact.module.scss"
import NameBanner from "../name-banner/name-banner"

const FormSubmissionResult = Object.freeze({
  SUCCESS: Symbol("success"),
  ERROR: Symbol("error"),
  ALREADY_ADDED: Symbol("already_added"),
  NONE: Symbol("none"),
})

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message }

    const encode = data => {
      const formData = new FormData()

      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })

      return formData
    }

    setStatus(FormSubmissionResult.NONE)

    fetch("/", {
      method: "POST",
      body: encode(data),
    })
      .then(() => {
        setStatus(FormSubmissionResult.SUCCESS)
        setEmail("")
        setMessage("")
        setName("")
      })
      .catch(error => {
        if (error.msg && error.msg.includes("is already subscribed to list")) {
          setStatus(FormSubmissionResult.ALREADY_ADDED)
        } else {
          setStatus(FormSubmissionResult.ERROR)

          console.error(error)
        }
      })

    e.preventDefault()
  }

  const handleChange = e => {
    const { name, value } = e.target

    if (name === "name") {
      return setName(value)
    }

    if (name === "email") {
      return setEmail(value)
    }

    if (name === "message") {
      return setMessage(value)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <NameBanner name={`Kontakt`} />

        <div className={`container ${styles.container}`}>
          <div className={`row`}>
            <div className={`col-lg-6 offset-lg-3 col-sm-12`}>
              {(status === FormSubmissionResult.SUCCESS ||
                status === FormSubmissionResult.ALREADY_ADDED) && (
                <p className={`${styles.message} ${styles.success}`}>
                  Dziękujemy za wiadomość, odpowiemy w możliwie szybkim
                  terminie!
                </p>
              )}
              {status === FormSubmissionResult.ERROR && (
                <p className={`${styles.message} ${styles.error}`}>
                  Przepraszamy ale wystąpił błąd w trakcie wysyłania wiadomości
                  :(
                </p>
              )}
            </div>
            <div className={`col-lg-6 offset-lg-3 col-sm-12`}>
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
                    value={name}
                    onChange={handleChange}
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
                    value={email}
                    onChange={handleChange}
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
                    value={message}
                    onChange={handleChange}
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

export default Contact
