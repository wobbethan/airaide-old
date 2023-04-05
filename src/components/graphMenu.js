import React, { useState } from 'react'
import ReactSlider from 'react-slider'

function GraphMenu(props) {

  //Constants
  
  //Text Boxes
    const [airline, setAirline] = useState("")
    const [airportStart, setAirportStart] = useState("")
    const [airportEnd, setAirportEnd] = useState("")
    const [flightNum, setFlightNum] = useState(0)

  //Condition Check Boxes
    const [cancelled, setCanceled] = useState(false)

    const [diverted, setDiverted] = useState(false)

    //Consition Check box handlers
    const handleCancel = () => setCanceled(!cancelled)
  
    const handleDivert = () => setDiverted(!diverted)



    const generateButtonPressed = () => {
      props.callback({airline: airline, airportStart: airportStart, airportEnd: airportEnd, flightNum: flightNum, cancelled: cancelled, diverted: diverted})

    }



  return (
    <div>
      <h1 className="d-flex justify-content-center">Menu</h1>
      
      <h2>Delay Type (Y-axis | Up to 6 curves )</h2>
      <div>
      <label>
            <input type = "checkbox"/>
            Carrier Delay
        </label>
        <label>
            <input type = "checkbox"/>
            Weather Delay
        </label>
        <label>
            <input type = "checkbox"/>
            NAS Delay
        </label>
        <label>
            <input type = "checkbox"/>
            Security Delay
        </label>
        <label>
            <input type = "checkbox"/>
            Late-Aircraft Delay
        </label>
        <label>
            <input type = "checkbox"/>
            Total Delay Time
        </label>

       
      </div>
      <div>
      <h2>Range of Years (X-axis) </h2>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[2009, 2018]}
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={state => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={0}
          min ={2009}
          max ={2018}

      />
      </div>
      <div>
        <h2>Conditions</h2>

        <label>
            <input onChange={handleCancel} value={cancelled} type = "checkbox"/>
            Flight Cancelled
        </label>
        <label>
            <input onChange={handleDivert} value={diverted} type = "checkbox"/>
            Diverted Flights
        </label>
        
        <form>
              <label htmlFor="airline-field">Airline code:</label>
              <input id="airline-field"  type="text" value ={airline} onChange={(e) => setAirline(e.target.value)}></input>

              <label htmlFor="airportStart-field">Starting Airport Code:</label>
              <input id="airportStart-field" type="text" value ={airportStart} onChange={(e) => setAirportStart(e.target.value)}></input>

              <label htmlFor="airportEnd-field">Destination Airport code:</label>
              <input id="airportEnd-field"  type="text" value ={airportEnd} onChange={(e) => setAirportEnd(e.target.value)}></input>

              <label htmlFor="flightnum-field">Flight Number:</label>
              <input id="airport-field"  type="number" value ={flightNum} onChange={(e) => setFlightNum(e.target.value)}></input>
        </form>

        <button type="button" onClick={generateButtonPressed}>Generate</button>

      </div>

    </div>

  )
}

export default GraphMenu