// React Required
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

import PageScrollTop from "./component/PageScrollTop";

// Dark Home Layout
import DarkMainDemo from "./dark/MainDemo";

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";
import Volunteers from "./elements/Volunteers";
import Gallery from "./elements/Gallery";
import Merch from "./elements/Merch";
import Contributors from "./elements/Contributors/Contributors";
// Blocks Layout

import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import SliderOne from "./component/slider/SliderOne";
import { Helmet } from "react-helmet";
import axios from "axios";

const Root = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("./database.json").then((res) => setData(res.data));
  }, []);

  return (
    <BrowserRouter basename={"/"}>
      <div className="active-dark">
        <Helmet pageTitle="Code.Sydney" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        <div className="slider-wrapper">
          <SliderOne />
        </div>
        <PageScrollTop>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={DarkMainDemo}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/volunteers`}
              component={Volunteers}
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
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
