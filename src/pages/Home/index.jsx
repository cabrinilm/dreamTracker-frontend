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
        <input date="date" type="text" />
        <input name="sleep at" type="number" />
        <input name="woke up" type="number" />
        <input note="note" type="text" />
        <button type="button">Register</button>
      </form>
     
       {user.map(user =>(
         <div key={user.id}>
         <div>
           <p>Sleep at: {user.sleep_time}</p>
           <p>Woke up at: {user.wake_time}</p>
           <p>Duration: {user.duration}</p>
           <p>7 Days Average: {user.id}</p>
          
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
