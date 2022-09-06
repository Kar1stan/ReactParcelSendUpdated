import React, { useState } from "react";
import RequestForm from "./components/RequestForm.js";
import RequestsList from "./components/RequestsList.js";

function App() {
 // here we create an array state to store the request form data
 const [requests, updateRequests] = useState([]);

 const addRequest = (request) => {
   updateRequests([...requests, request]);
 };

 return (
   <div className="App">
     <RequestForm addRequestData={addRequest} />
     <RequestsList requests={requests} addRequestUpdatedData={addRequest} />
   </div>
 );
}
export default App;
