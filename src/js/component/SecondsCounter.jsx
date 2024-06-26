import React from "react"
const SecondsCounter = ({ seconds }) => {
  return (

    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="counter-container">

            <spam className="icon">&#128338;</spam>
            <div className="counter-digit">{Math.floor(seconds / 100000) % 10}</div>  
            <div className="counter-digit">{Math.floor(seconds / 10000) % 10}</div>
            <div className="counter-digit">:</div>
            <div className="counter-digit">{Math.floor(seconds / 1000) % 10}</div>
            <div className="counter-digit">{Math.floor(seconds / 100) % 10}</div>
            <div className="counter-digit">:</div>
            <div className="counter-digit">{Math.floor(seconds / 10) % 10}</div>
            <div className="counter-digit">{Math.floor(seconds / 1) % 10}</div>
            {/* <div className="counter-digit">{seconds}</div> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondsCounter 