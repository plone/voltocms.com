import React from "react"

const TimeLine = props => {
  return (
    <div
      className="timeline"
      style={{
        width: `800px`,
        display: "flex",
        flexDirection: "row",
        margin: "0 auto",
      }}
    >
      <div
        className="date-column"
        style={{ width: "200px", display: "flex", flexDirection: "column" }}
      >
        <div className="row">
          <span>{props.date1}</span>
        </div>
        <div className="row">
          <span>{props.date2}</span>
        </div>
        <div className="row">
          <span>{props.date3}</span>
        </div>
        <div className="row">
          <span>{props.date4}</span>
        </div>
        <div className="row">
          <span>{props.date5}</span>
        </div>
        <div className="row">
          <span>{props.date6}</span>
        </div>
      </div>
      <div
        className="icon-column"
        style={{ width: "25px", display: "flex", flexDirection: "column" }}
      >
        <div className="row">
          <div
            className="blueball"
            style={{
              backgroundColor: "blue",
              height: "20px",
              borderRadius: "80%",
            }}
          ></div>
          <div
            className="bluestick"
            style={{
              width: "4px",
              height: "66px",
              backgroundColor: "blue",
              margin: "8px auto 0 auto",
            }}
          ></div>
        </div>
        <div className="row">
          <div
            className="blueball"
            style={{
              backgroundColor: "blue",
              height: "20px",
              borderRadius: "80%",
            }}
          ></div>
          <div className="bluestick"></div>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
      <div
        className="event-column"
        style={{ width: "575px", display: "flex", flexDirection: "column" }}
      >
        <div className="row">
          <span>{props.event1}</span>
        </div>
        <div className="row">
          <span>{props.event2}</span>
        </div>
        <div className="row">
          <span>{props.event3}</span>
        </div>
        <div className="row">
          <span>{props.event4}</span>
        </div>
        <div className="row">
          <span>{props.event5}</span>
        </div>
        <div className="row">
          <span>{props.event6}</span>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
