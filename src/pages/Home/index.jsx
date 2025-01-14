import "./style.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import api from "../../services/api";
import  { useEffect, useState }  from 'react';

function Home() {
  const [users, setUsers] = useState([])

  async function getUsers() {
    const response = await api.get('/dreamTracker', {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
   setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

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
       <div class="card-container">
       {users.slice(-7).map(user =>(
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
    </div>
  );
}

export default Home;
