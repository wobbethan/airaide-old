import React from 'react'
import ReactSlider from 'react-slider'

function graphMenu() {
  return (
    <div>
      <h1>Menu</h1>
      <h2>Delay Type (Y-axis)</h2>
      <div>
        <select>
        <option value="carrierD">Carrier Delay</option>
        <option value="weatherD">Weather Delay</option>
        <option selected value="nasD">NAS Delay</option>
        <option value="securityD">Security Delay</option>
        </select>
       
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
            Domestic Flights
        </label>
        <label>
            <input type = "checkbox"/>
            International Flights
        </label>
        <form>
              <label htmlFor="airline-field">Airline code:</label>
              <input id="airine-field" value = "" type="text" ></input>
              <label htmlFor="airport-field">Airport code:</label>
              <input id="airport-field" value = "" type="text" ></input>
        </form>
        <button type="button">Generate</button>

      </div>
        
    </div>

  )
}

export default graphMenu