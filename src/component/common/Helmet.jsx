import React from "react"
import { Helmet } from "react-helmet"

export default function PageHelmet({ pageTitle }) {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content="Code.Sydney Website" />
    </Helmet>
  )
}
