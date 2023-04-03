import React from 'react'
import ReactSlider from 'react-slider'

function graphMenu() {
  return (
    <div>
      <h1 className="d-flex justify-content-center">Menu</h1>
      <h2>Delay Type (Y-axis | Up to 5 curves )</h2>
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
            <input type = "checkbox"/>
            Flight Cancelled
        </label>
        <label>
            <input type = "checkbox"/>
            Diverted Flights
        </label>
        <label>
            <input type = "checkbox"/>
            Domestic Flights
        </label>
        <label>
            <input type = "checkbox"/>
            International Flights
        </label>
        <form>
              <label htmlFor="airline-field">Airline code:</label>
              <input id="airine-field" value = "" type="text" ></input>
              <label htmlFor="airportStart-field">Starting Airport Code:</label>
              <input id="airportStart-field" value = "" type="text" ></input>
              <label htmlFor="airportEnd-field">Destination Airport code:</label>
              <input id="airportEnd-field" value = "" type="text" ></input>
              <label htmlFor="flightnum-field">Flight Number:</label>
              <input id="airport-field" value = "" type="text" ></input>
        </form>

        <button type="button">Generate</button>

      </div>
      <h3> THIS LABEL WILL DISPLAY GENERATED SQL FOR TESTING </h3>

    </div>

  )
}

export default graphMenu