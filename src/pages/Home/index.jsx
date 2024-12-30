import "./style.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const user = [
    {
      id: "123",
      date: "23/10/20",
      sleep_time: "23:00",
      wake_time: "08:00",
      duration: "9",
      notes: "early",
    },
    {
      id: "113",
      date: "23/10/20",
      sleep_time: "23:00",
      wake_time: "08:00",
      duration: "9",
      notes: "early",
    },
    {
      id: "133",
      date: "23/10/20",
      sleep_time: "23:00",
      wake_time: "08:00",
      duration: "9",
      notes: "early",
    }
  ];

  return (
    <div className="container">
      <form>
        <h1>Dream Tracker</h1>
        <input placeholder='Date'date="date" type="text" />
        <input placeholder='Sleep At' name="sleep at" type="number" />
        <input placeholder='Woke Up' name="woke up" type="number" />
        <input placeholder='Note' note="note" type="text" />
        <button type="button">Register</button>
      </form>
     
       {user.map(user =>(
         <div key={user.id} className='card'>
         <div>
           <p>Sleep at: <span>{user.sleep_time}</span></p>
           <p>Woke up at: <span>{user.wake_time}</span></p>
           <p>Duration: <span>{user.duration}</span></p>
           <p>7 Days Average: <span>{user.id}</span></p>
          
         </div>
         <button>
           <FontAwesomeIcon icon={faTrash} />
         </button>
       </div>
        
      ))}
      
    </div>
  );
}

export default Home;
