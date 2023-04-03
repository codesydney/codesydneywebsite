import React, { useState } from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import database from "../../../public/database.json";

const CounterOne = () => {
  const [visited, setVisited] = useState({didViewCountUp: false})

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setVisited({ didViewCountUp: true })
    }
  }

  return (
    <>
      <div className="row">
        {database.counterData.map((value, index) => (
          <div
            className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12"
            key={index}
          >
            <h5 className="counter">
              <VisibilitySensor
                onChange={(e) => onVisibilityChange(e)}
                offset={{ top: 10 }}
                delayedCall
              >
                <CountUp
                  end={visited.didViewCountUp ? value.countNum : 0}
                />
              </VisibilitySensor>
            </h5>
            <p className="description">{value.countTitle}</p>
          </div>
        ))}
      </div>
    </>
  )
}
export default CounterOne
