import React, { useState } from "react";
import {Card} from 'react-bootstrap';
import "../index.css";

function RequestsList({requests,addRequestUpdatedData}) {
    const [showEdit, setShowEdit] = useState(-1);
    const [updatedText, setUpdatedText] = useState({
    updatedis_city:'',
    updatecol_city:'',
    updatepar_type:'',
    updatepar_date:'',
    updatepar_des:''
    });
    const handleChange = (event) => {
      setUpdatedText({ ...updatedText, [event.target.name]: event.target.value });
    };
    function deleteRequest(id) {
        const newArray = requests.filter((item) => item.id !== id);
        addRequestData(newArray);
      }
    
      /* Edit an item text after creating it. */
      function editRequest(id,updatedText) {
        // Get the current item
        const currentItem = requests.filter((item) => item.id === id);
    
        // Create a new item with same id
        const newItem = {
          id: currentItem.id,
          dis_city:updatedText.updatedis_city,
          col_city:updatedText.updatecol_city,
          par_type:updatedText.updatepar_type,
          par_date:updatedText.updatepar_date,
          par_des:updatedText.updatepar_des
        };
        deleteRequest(currentItem.id);
    
        // Replace item in the item list
        addRequestUpdatedData([...requests,newItem]);
        setUpdatedText({updatedis_city:'',updatecol_city:'',updatepar_type:'',updatepar_date:'',updatepar_des:''});
        setShowEdit(-1);
      }
          return (
            <>
              {requests.map((item) => {
              <div className="container">
              <h3>List of requests:</h3>
              <Card border="primary" style={{ width: '20rem' }} key={item.id} onClick={() => setShowEdit(item.id)} variant="top">
              <Card.Header>Request</Card.Header>
              <Card.Body>
                <Card.Text>City of dipatch:{item.dis_city}</Card.Text>
                <Card.Text>City of collection:{item.col_city}</Card.Text>
                <Card.Text>Type of parcel:{item.par_type}</Card.Text>
                <Card.Text>Date of parcel:{item.par_date}</Card.Text>
                <Card.Text>Description of parcel:{item.par_des}</Card.Text>
                <button
                  className="btn delete"
                  onClick={() => deleteRequest(item.id)}
                >
                  Delete  
                </button>
              </Card.Body>
              </Card>
              </div> 
              })}
{showEdit === requests.id ? (
    <Card border="primary" style={{ width: '20rem' }}  variant="top">
    <Card.Header>Update Request</Card.Header>
    <Card.Body>
    <Card.Title>City of dispatch:</Card.Title>
     <input
       type="text"
       value={updatedText.updatedis_city}
       onChange={handleChange}
     />
     <Card.Title>City of collection:</Card.Title>
     <input
       type="text"
       value={updatedText.updatecol_city}
       onChange={handleChange}
     />
     <Card.Title>Type of parcel:</Card.Title>
      <input
       type="text"
       value={updatedText.updatepar_type}
       onChange={handleChange}
     />
     <Card.Title>Date of parcel:</Card.Title>
      <input
       type="text"
       value={updatedText.updatepar_date}
       onChange={handleChange}
     />
     <Card.Title>Description of parcel:</Card.Title>
      <input
       type="text"
       value={updatedText.updatepar_des}
       onChange={handleChange}
     />
     <button className="btn update" 
     onClick={() => editRequest(requests.id,updatedText)}
     >
       Update
     </button>
     </Card.Body>
     </Card>
 ) : null}
</>
);
}
export default RequestsList;