import React, { Component } from "react"

import styles from "./home-info.module.scss"

export default class HomeInfo extends Component {
  render() {
    return (
      <>
        <div className={`container ${styles.container}`}>
          <div className={`row`}>
            <div className={`col-md-4`}>
              <div className={`row`}>
                <div className={`col-2 ${styles.iconWrapper}`}>
                  <i className={`fa fa-trophy ${styles.icon}`} />
                </div>
                <div className={`col-10`}>
                  <h3 className={`${styles.title}`}>Kim jesteśmy?</h3>
                  <p>
                    Donec id elit non mi porta gravida at eget me tus. Sed
                    posuere consectetur estat lobo rtis. Cum sociis natoque.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-md-4`}>
              <div className={`row`}>
                <div className={`col-2 ${styles.iconWrapper}`}>
                  <i className={`fa fa-flash ${styles.icon}`} />
                </div>
                <div className={`col-10`}>
                  <h3 className={`${styles.title}`}>Co robimy?</h3>
                  <p>
                    Donec id elit non mi porta gravida at eget me tus. Sed
                    posuere consectetur estat lobo rtis. Cum sociis natoque.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-md-4`}>
              <div className={`row`}>
                <div className={`col-2 ${styles.iconWrapper}`}>
                  <i className={`fa fa-question ${styles.icon}`} />
                </div>
                <div className={`col-10`}>
                  <h3 className={`${styles.title}`}>Czemu to robimy?</h3>
                  <p>
                    Donec id elit non mi porta gravida at eget me tus. Sed
                    posuere consectetur estat lobo rtis. Cum sociis natoque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
