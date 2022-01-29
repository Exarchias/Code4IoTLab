import React, { useState } from "react";
var thelink = "http://192.168.1.237";
var theport = 3000;

function Measurements() {
    const [data, setData] = useState();

    async function fetchMeasurements() {
        //"/api/measurements"
        const response = await fetch(thelink + ":" + theport + "/sdata");
        const json = await response.json();
        setData(json);
    }

    function boopthenettio() {
        //const respnettio = fetch("https://maker.ifttt.com/trigger/onoff/with/key/j2eqWrlFER7ngphU4IUTDmYD7QNigvN_mqXCg36Kd0L");
        console.log("boop!");
        let url="https://maker.ifttt.com/trigger/onoff/with/key/j2eqWrlFER7ngphU4IUTDmYD7QNigvN_mqXCg36Kd0L";
        fetch(url).then(function(response) {
            return response.json();
          }).then(function(fdata) {
            console.log(fdata);
          }).catch(function() {
            console.log("That sucks");
          });
        }

    function boopthehs100() {
        //const resphs100 = fetch("http://194.47.34.210:3000/onoff");
        console.log("boop!");
        let url=thelink + ":" + theport + "/onoff";
        fetch(url).then(function(response) {
            return response.json();
          }).then(function(fdata) {
            console.log(fdata);
          }).catch(function() {
            console.log("That sucks");
          });
        }

    return (
        <section>
            <h1>Measurements</h1>
            <table>
<thead>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>eco2</td>
    <td>{data!=null && data.eco2!=null ? data.eco2: ""}</td>
  </tr>
  <tr>
    <td>tvoc</td>
    <td>{data!=null && data.tvoc!=null ? data.tvoc: ""}</td>
  </tr>
  <tr>
    <td>quaternion.w</td>
    <td>{data!=null && data.quaternionw!=null ? data.quaternionw: ""}</td>
  </tr>
  <tr>
    <td>quaternion.x</td>
    <td>{data!=null && data.quaternionx!=null ? data.quaternionx: ""}</td>
  </tr>
  <tr>
    <td>quaternion.y</td>
    <td>{data!=null && data.quaterniony!=null ? data.quaterniony: ""}</td>
  </tr>
  <tr>
    <td>quaternion.z</td>
    <td>{data!=null && data.quaternionz!=null ? data.quaternionz: ""}</td>
  </tr>
  <tr>
    <td>euler.roll</td>
    <td>{data!=null && data.eulerroll!=null ? data.eulerroll: ""}</td>
  </tr>
  <tr>
    <td>euler.pitch</td>
    <td>{data!=null && data.eulerpitch!=null ? data.eulerpitch: ""}</td>
  </tr>
  <tr>
    <td>euler.yaw</td>
    <td>{data!=null && data.euleryaw!=null ? data.euleryaw: ""}</td>
  </tr>
  <tr>
    <td>heading</td>
    <td>{data!=null && data.heading!=null ? data.heading: ""}</td>
  </tr>
  <tr>
    <td>gravity.x</td>
    <td>{data!=null && data.gravityx!=null ? data.gravityx: ""}</td>
  </tr>
  <tr>
    <td>gravity.y</td>
    <td>{data!=null && data.gravityy!=null ? data.gravityy: ""}</td>
  </tr>
  <tr>
    <td>gravity.z</td>
    <td>{data!=null && data.gravityz!=null ? data.gravityz: ""}</td>
  </tr>
</tbody>
</table>
            <button onClick={fetchMeasurements}>Fetch Data</button>
            <button onClick={boopthenettio}>Toggle Nettio</button>
            <button onClick={boopthehs100}>Toggle HS100</button>
        </section>
    )
}

export default Measurements;