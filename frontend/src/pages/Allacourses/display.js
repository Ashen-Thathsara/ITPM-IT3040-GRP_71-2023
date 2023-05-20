import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './AllCourses.module.css';
import Swal from 'sweetalert2';


const AllEventsdisplay = () => {
  const [events, setevents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [eventID, SeteventID] = useState("");
  const [eventName, SeteventName] = useState("");
  const [location, Setlocation] = useState("");

  const [startingTime, SetstartingTime] = useState("");
  const [date, Setdate] = useState("");
  const [timeDuration, SettimeDuration] = useState("");
 

  const navigate = useNavigate();

  const handleDestination = () => {
    navigate("/edit", { state: {  eventID,
      eventName,
      location,
      startingTime,
      date,
      timeDuration,
   } });
  };

  useEffect(() => {
    axios.get('http://localhost:8070/event/').then((res) => {
      setevents(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }, []);

  useEffect(() => {
    const results = events.filter(event =>
      event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, events]);

  const handleSearch = event => {
    setSearchTerm(event.target.value.toLowerCase());
  };


 
  return (
    <div className='AllContent'>

      <div className='container' style={{ width: '100%', float: 'right' }}>

        <h2>
          <center>All Events Details</center>
        </h2>

        <div className='input-group mb-3' style={{ width: '75%', float: 'right', marginTop: '50px' }} >

          <center>
            <input style={{marginLeft: '100px'}}
              type='text'
              className='form-control'
              placeholder='Search by Event Name'
              aria-label='Search'
              aria-describedby='search-btn'
              value={searchTerm}
              onChange={handleSearch}
            />
          </center>

          

        </div>

        <div class='table_conatiner' style={{ width: '100%', height: 'auto' }}>

          <table
            className='table table-bordered border-primary'
            style={{ width: '100%' }}>

            <thead>

              <tr>
                <th scope='col'>Event ID</th>
                <th scope='col'>Event Name</th>
          
                <th scope='col'>Location</th>
                <th scope='col'>Starting Time</th>
                <th scope='col'>Date</th>
                <th scope='col'>Time Duration</th>
                
               
              </tr>

            </thead>

            <tbody>

              {searchResults.map((event) => (
                <tr >
                  <th onChange={(e) => SeteventID(e.target.value)}>{event.eventID}</th>
                  <td onChange={(e) => SeteventName(e.target.value)}>{event.eventName}</td>
                  <td onChange={(e) => Setlocation(e.target.value)}> {event.location}</td>
                  <td onChange={(e) => SetstartingTime(e.target.value)}>{event.startingTime}</td>
                  <td onChange={(e) => Setdate(e.target.value)}>{event.date}</td>
                  <td onChange={(e) => SettimeDuration(e.target.value)}>{event.timeDuration} hours</td>
                  
                  
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default AllEventsdisplay;