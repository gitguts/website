import React, { Component } from "react"

import HomeBanner from "../home-banner/home-banner"
import HomeInfo from "../home-info/home-info"
import HomeNewsletter from "../home-newsletter/home-newsletter"

export default class Home extends Component {
  render() {
    return (
      <>
        <HomeBanner />
        <HomeInfo />
        <HomeNewsletter />
      </>
    )
  }
}
