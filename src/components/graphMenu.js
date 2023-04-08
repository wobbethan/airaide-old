import React, { useState } from 'react'
import ReactSlider from 'react-slider'

function GraphMenu(props) {

  //Constants
  
    //Slider
    const [multiValue, setMultiValue] = useState([2009, 2018]);
    const changeMultiValue = (event, value) => {
      setMultiValue(event, value);
    };
    //Text Boxes
    const [airline, setAirline] = useState("")
    const [airportStart, setAirportStart] = useState("")
    const [airportEnd, setAirportEnd] = useState("")
    const [flightNum, setFlightNum] = useState("")

    //Condition Check Boxes
    const [cancelled, setCanceled] = useState(0)
    const [diverted, setDiverted] = useState(0)
    const [devTools, setDevtools] = useState(0)


    //return
    var injectedCode


    //Consition Check box handlers
    const handleCancel = () => {cancelled ? setCanceled(0): setCanceled(1); }
    const handleDivert = () => {diverted ? setDiverted(0): setDiverted(1); }
    const handleTools = () => {devTools ? setDevtools(0): setDevtools(1); }



    const generateButtonPressed = () => {
      injectedCode = ("Select Month, SUM(TIME) FROM (SELECT Month, total_delay as TIME FROM flights JOIN delays ON flights.key = delays.key WHERE flightdate >= '01/01/2009' AND flightdate <='12/31/2018') Group by Month Order by Month asc;" )
      props.callback({airline: airline, airportStart: airportStart, airportEnd: airportEnd, flightNum: flightNum, cancelled: cancelled, diverted: diverted, injectedCode: injectedCode})

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
        <label>
            <input type = "checkbox" onChange={handleTools}/>
            Devloper Tools
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
          value={multiValue}
          onChange={changeMultiValue}

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

      {/*Query Construction*/}
      <div style={{display: devTools? "block": "none"}}>
      <h2>-------------------------------------------------------------------------</h2>
      <p>
      Select Month, SUM(TIME)
      <p>FROM (</p>
        <p>SELECT Month, total_delay as TIME</p>
        <p>FROM flights JOIN delays ON flights.key = delays.key</p>
        <p>WHERE flightdate &#62;= '01/01/{multiValue[0]}' AND flightdate &#60;='12/31/{multiValue[1]}' {airline === "" ? "" :<>AND airline_code = '{airline}'</>} {airportStart === "" ? "" :<>AND airport_start = '{airportStart}'</>} {airportEnd === "" ? "" :<>AND airport_end = '{airportEnd}'</>} {flightNum === "" ? "" :<>AND Flight_Number = {flightNum}</>} AND flight_cancellation = {cancelled} AND flight_diverted = {diverted}</p>
        <p>)</p>
        <p>Group by Month</p>
        <p>Order by Month asc;</p>
      </p>
      <h2>-------------------------------------------------------------------------</h2>

      </div>
    
      

    </div>

  )
}

export default GraphMenu