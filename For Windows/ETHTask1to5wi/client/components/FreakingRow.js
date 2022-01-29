import React, { useState } from "react";

function FreakingRow(data) {
    

    return (
        
<tr>
    <td>{data.data!=null ? data.data._id: ""}</td>
    <td>{data.data!=null ? data.data.unit_id: ""}</td>
    <td>{data.data!=null ? data.data.temperature: ""}</td>
    <td>{data.data!=null ? data.data.unix_timestamp: ""}</td>
  </tr>
  
    )
}

export default FreakingRow;