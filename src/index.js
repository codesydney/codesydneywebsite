// React Required
import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"

// Create Import File
import "./index.scss"

import PageScrollTop from "./component/PageScrollTop"

// Dark Home Layout
import DarkMainDemo from "./dark/MainDemo"

// Element Layout
import Contact from "./elements/Contact"
import error404 from "./elements/error404"
import Volunteers from "./elements/Volunteers"
import Reviews from "./elements/Reviews"
import Friends from "./elements/Friends"
import Gallery from "./elements/Gallery"
import Merch from "./elements/Merch"
import Techies4Good from "./elements/Techies4Good"
import Apps4Good from "./elements/Apps4Good"
import Portfolios from "./elements/Portfolios"
import Newsletter from "./elements/Newsletter"
import Contributors from "./elements/Contributors/Contributors"
import Testimonials from "./elements/Testimonial"
// Blocks Layout

import { BrowserRouter, Switch, Route } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"
import Header from "./component/header/Header"
import Footer from "./component/footer/Footer"

import { Helmet } from "react-helmet"
import axios from "axios"

const Root = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get("./database.json").then((res) => setData(res.data))
  }, [])

  return (
    <BrowserRouter basename={"/"}>
      <div className="active-dark">
        <Helmet pageTitle="Code.Sydney" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        <PageScrollTop>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={DarkMainDemo}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/leadership`}
              component={Volunteers}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/reviews`}
              component={Reviews}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/friends`}
              component={Friends}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/gallery`}
              component={Gallery}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/merch`}
              render={() => <Merch merch={data.merch} />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/techies4good`}
              render={() => <Techies4Good techies4good={data.techies4good} />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/apps4good`}
              render={() => <Apps4Good apps4good={data.apps4good} />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/portfolios`}
              render={() => <Portfolios portfolios={data.portfolios} />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/testimonials`}
              render={() => <Testimonials testimonials={data.testimonials} />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/newsletter`}
              component={Newsletter}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/contributors`}
              component={Contributors}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact-us`}
              component={Contact}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/404`}
              component={error404}
            />
            <Route component={error404} />
          </Switch>
        </PageScrollTop>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById("root"))
serviceWorker.register()
