import React from 'react'

export default function Details(props) {
  return (
    <div className="row">
    <div className="col">
      <p>{props.parameter1}</p>
      <h1>{props.info1} {props.units1}</h1>
    </div>
    <div className="col">
      <p>{props.parameter2}</p>
      <h1>{props.info2} {props.units2}</h1>
    </div>
  </div>
  )
}
