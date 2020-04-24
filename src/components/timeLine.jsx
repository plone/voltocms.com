import React from "react"

const TimeLine = props => {
  return (
    <div className="timeline">
      <div className="date-column">
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
      <div className="icon-column">
        <div className="row">
          <div className="circle blue"></div>
          <div className="line blue"></div>
        </div>
        <div className="row">
          <div className="circle blue"></div>
          <div className="line orange"></div>
        </div>
        <div className="row">
          <div className="circle orange"></div>
          <div className="line orange"></div>
        </div>
        <div className="row">
          <div className="circle red"></div>
          <div className="line red"></div>
        </div>
        <div className="row">
          <div className="circle red"></div>
          <div className="line red"></div>
        </div>
        <div className="row">
          <div className="circle red"></div>
        </div>
      </div>
      <div className="event-column">
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
