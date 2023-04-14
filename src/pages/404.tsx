import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

const NotFound = (_props: PageProps) => (
  <Layout>
    <h1>404 - Página no encontrada</h1>
    <p>Lamentablemente no pudimos encontrar lo que estabas buscando :(</p>
  </Layout>
)

export default NotFound
