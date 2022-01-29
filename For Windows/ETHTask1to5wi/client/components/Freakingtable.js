import React, { useState } from "react";

function FreakingTable(data) {


  async function method1() {
    console.log("I am method 1 and I am running");
}

async function method2() {
  console.log("I am method 2 and I am running");
}

async function method3() {
  console.log("I am method 3 and I am running");
}

async function method4() {
  console.log("I am method 4 and I am running");
}
    



    return (
        <div>
            <h1>The freaking data</h1>
            <p>It works this time? {data.data!=null ? data.data[0]._id: "nah..."}</p>
            <table>
<thead>
  <tr>
    <th onClick={method1}>id</th>
    <th onClick={method2}>unit_id</th>
    <th onClick={method3}>temperature</th>
    <th onClick={method4}>unix_timestamp</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>{data.data!=null ? data.data[data.data.length - 5]._id: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 5].unit_id: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 5].temperature: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 5].unix_timestamp: ""}</td>
  </tr>
  <tr>
  <td>{data.data!=null ? data.data[data.data.length - 4]._id: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 4].unit_id: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 4].temperature: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 4].unix_timestamp: ""}</td>
  </tr>
  <tr>
  <td>{data.data!=null ? data.data[data.data.length - 3]._id: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 3].unit_id: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 3].temperature: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 3].unix_timestamp: ""}</td>
  </tr>
  <tr>
  <td>{data.data!=null ? data.data[data.data.length - 2]._id: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 2].unit_id: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 2].temperature: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 2].unix_timestamp: ""}</td>
  </tr>
  <tr>
  <td>{data.data!=null ? data.data[data.data.length - 1]._id: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 1].unit_id: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 1].temperature: ""}</td>
    <td>{data.data!=null ? data.data[data.data.length - 1].unix_timestamp: ""}</td>
  </tr>
</tbody>
</table>
        </div>
    )
}

export default FreakingTable;