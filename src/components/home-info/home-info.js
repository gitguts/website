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
                    Entuzjastami i ewangelistami dobrych praktyk zakochanymi w
                    systemie kontroli wersji git.
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
                    Uczymy programistów efektywnie korzystać z systemu kontroli
                    wersji git oraz poprawnie organizować proces wytwarzania
                    oprogramowania z jego użyciem.
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
                    Ponieważ zarówno dzielenie się wiedzą jak i sam git jest
                    super :)
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
