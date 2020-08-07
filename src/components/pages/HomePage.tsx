import * as React from 'react'

import Navbar from "../layout/Navbar"
import BannerHeader from "../layout/BannerHeader"
import Products from "../layout/Products"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <BannerHeader />
      <Products />
    </>
  )
}
