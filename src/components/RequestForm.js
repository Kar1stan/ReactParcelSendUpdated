import React, { useState } from "react";
import {Table} from 'react-bootstrap';
import "../index.css";

function RequestForm({addRequestData}) {
    // State Hook - `useState`
    const [requestInfo,setRequestInfo] = useState({
      id: Math.floor(Math.random() * 1000),
      dis_city:'',
      col_city:'',
      par_type:'',
      par_date:'',
      par_des:''
    });
    // Helper Functions
    const handleChange = (event) => {
      setRequestInfo({ ...requestInfo, [event.target.name]: event.target.value });
    };
    /* Adds a new item to the list array*/
    function addRequest() {
      // ! Check for empty item
      if (!requestInfo.dis_city && !requestInfo.col_city && !requestInfo.par_type && !requestInfo.par_date && !requestInfo.par_des) {
        alert("Fill the parcel form please!");
        return;
      }
      addRequestData(requestInfo);
      // Reset inputs back to original state
      setRequestInfo({id:'',dis_city:'',col_city:'',par_type:'',par_date:'',par_des:''});
    }
  
    /* Deletes an item based on the `item.id` key */
    
  
    // Main part of app
    return (
      <div className="app">
        {/* 1. Header  */}
        <Table striped bordered hover size="sm">
        <thead>
        <tr>
        <th><h1>Request creation form</h1></th>
        </tr>
        </thead>
        {/* 2. Add new item (input) */}
        <tbody>
        <tr>
        <td>The city from which the parcel is sent:</td>
        <td><input
          type="text"
          name="dis_city"
          placeholder="Enter the city of dispatch"
          value={requestInfo.dis_city}
          onChange={handleChange}
        /></td>
        </tr>
        <tr>
        <td>The city to which the parcel is sent:</td>
        <td><input
          type="text"
          name="col_city"
          placeholder="Enter the city of collection"
          value={requestInfo.col_city}
          onChange={handleChange}
        /></td>
        </tr>
        <tr>
        <td>Type of parcel:</td>
        <td><input
          type="text"
          name="par_type"
          placeholder="Enter the type of parcel"
          value={requestInfo.par_type}
          onChange={handleChange}
        /></td>
        </tr>
        <tr>
        <td>Date of dispatch:</td>
        <td><input
          type="text"
          name="par_date"
          placeholder="Enter the date of parcel"
          value={requestInfo.par_date}
          onChange={handleChange}
        /></td>
        </tr>
        <tr>
        <td>Parcel description:</td>
        <td><input
          type="text"
          name="par_des"
          placeholder="Enter the description of parcel"
          value={requestInfo.par_des}
          onChange={handleChange}
        /></td>
        </tr>
        {/* Add (button) */}
        <tr>
          <td colSpan={2}><button className="btn create" onClick={() => addRequest()}>Create</button></td>
        </tr>
        </tbody>
        </Table>
        {/* 3. List of todos (unordered list) */}
      </div>
    );
    
}
export default RequestForm;