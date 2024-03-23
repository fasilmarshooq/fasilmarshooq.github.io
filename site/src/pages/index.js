import * as React from "react"

import Seo from "../components/seo"
import { HomeLayout } from "../components/HomeLayout/home-layout"

const IndexPage = () => <HomeLayout />

export const Head = () => <Seo title="Home" />

export default IndexPage
