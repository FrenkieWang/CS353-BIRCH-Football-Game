import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Collection.css";
import {  useNavigate} from "react-router-dom";
 
// props : Data transfered from outside into component inside.
const Record = (props) => ( //functional component

  <div class="card" style={{zoom:'0.7',backgroundColor:"black"}}>
    <img src={props.record.rarityUrl} alt="Avatar" style={{"width" : 300,"height" : 400}}></img> 
      <span class="player picture">
        <img src={props.record.imageUrl} alt="Avatar" style={{"width" : 227,"height" : 208}}></img>
      </span>
      <span class='player name'>{props.record.name}</span>
      <span class='player position'>{props.record.position}</span>
      <span class='player cardNum'>{props.record.cardNumber}</span>
      <span class='player type'>{props.record.rarity}</span>
      {/* <span class='player numberCircle'>{props.record.score}</span> */}
  </div>

);
 
export default function Collection() {
  var currentUrl = window.location.href;
    
  const ObjectId = currentUrl.split('/')[4];

 const navigate = useNavigate();
 const [records, setRecords] = useState([]);


 useEffect(() => {
  async function getRecords() {
   try {
     var currentUrl = `http://localhost:5000/users/basket/` + ObjectId;
     var response = await Promise.all([
       fetch(`http://localhost:5000/players`).then((response) => response.json()),
       fetch(`http://localhost:5000/modifiers`).then((response) => response.json()),
       fetch(currentUrl).then((response) => response.json()),
     ]);
   } catch (error) {
     console.log(error);
   }

   //  fetch Multiple API
   const player = response[0]; // Read "The information of Players"
   const modifier = response[1]; // Read "The information of Modifiers"
   const basket = response[2]; // Read "The information of Basket"

   var array = basket.Basket;
    array = array.map(Number);

  const players = player.filter((el) => array.includes(el.cardNumber));
  const modifiers = modifier.filter((el) => array.includes(el.modNumber));
  const records = [...players,...modifiers];

   setRecords(records);

 }
 getRecords();

 return;
}, [records.length]); 
 
 // This method will delete a record
 async function deleteRecord(id) {
   alert("Therapist (" +id+") is deleted");
   await fetch(`http://localhost:5000/therapists/delete/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function collection() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }

 
 async function clearData(e) {
  e.preventDefault();

  alert("Basket cleared");

  const clearUrl = "http://localhost:5000/users/basket/clear/" + ObjectId;

  await fetch(clearUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .catch(error => {
    window.alert(error);
    return;
  });

  var interfaceUrl = "/interface/" + ObjectId;
  navigate(interfaceUrl);
}
 
 // This following section will display the table with the records of individuals.
 return (
   <div id="collection"> 
     <div><h3>Card List</h3></div>    
     <div class = "flexBox">
       {collection()}
     </div>


     <div class="buttonline">
        <button class="buttonfunc back">
          <Link className="btn btn-link" to={`/interface/${ObjectId}`} style={{color: "black",fontWeight: "bolder"}}>Back to Interface</Link> 
       </button>

        <button class="buttonfunc clear" onClick={clearData}>Clear Basket</button>
      </div>
      
   </div>
 );
}