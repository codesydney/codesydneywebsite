import React, { Component, Fragment } from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import ScrollAnimation from "react-animate-on-scroll"

class CounterOne extends Component {
  state = {
    didViewCountUp: false,
  }
  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true })
    }
  }
  render() {
    let Data = [
      {
        countNum: 100,
        countTitle: "Jr Dev Resumes",
      },
      {
        countNum: 100,
        countTitle: "Open Jr Dev Roles",
      },
      {
        countNum: 100,
        countTitle: "Match Runs",
      },
      {
        countNum: 10,
        countTitle: "Recommendations",
      },
    ]

    return (
      <Fragment>
        <div className="row mt--40">
          {Data.map((value, index) => (
            <div
              className="counterup_style--2 col-lg-3 col-md-6 col-6"
              key={index}
            >
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                delay={100}
              >
                <h5 className="counter">
                  <VisibilitySensor
                    onChange={this.onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp
                      end={this.state.didViewCountUp ? value.countNum : 0}
                    />
                  </VisibilitySensor>
                </h5>
                <h4 className="description">{value.countTitle}</h4>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </Fragment>
    )
  }
}
export default CounterOne
