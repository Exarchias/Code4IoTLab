import React, { useState } from "react";
import FreakingRow from "./FreakingRow.js";

function FreakingTable3(data) {


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
{data.data!=null ? data.data.map((item) => <FreakingRow data={item} />):<td> </td>}
  
</tbody>
</table>
        </div>
    )
}

export default FreakingTable3;