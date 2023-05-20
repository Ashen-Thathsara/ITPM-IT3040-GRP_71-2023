import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './AllCourses.module.css';
import Swal from 'sweetalert2';


const AllEvents = () => {
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


  const deleteCourse = (id) => {
    axios.delete(`http://localhost:8070/event/delete/${id}`).then((res) => {
      // alert(res.data);

      Swal.fire('Succesfully Deleted')


      setevents(events.filter((events) => events._id!== id));
    }).catch((err) => {
      alert(err.message);
    });
  };

  function GenReport() {
    axios
      .get("http://localhost:8070/event/reporting", {
        responseType: 'blob',
      })
      .then((res) => {
        const url = window.URL.createObjectURL(res.event);
        const link = document.createElement('a');
        const currentDate = new Date().toISOString().slice(0,10);
        link.href = url;
        link.setAttribute('download', `Student_report_${currentDate}.pdf`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.log(error);
      });
  }

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

          <div style={{ width: '50%', float: 'right', marginLef: '100px' }}>
            <button
              class="btn btn-outline-secondary"
              onClick={() => {GenReport()}}
              style={{ backgroundColor: '#065A82', color: 'white' }}>Generate Report</button>

            <Link to='/'>
              <button
                class="btn btn-outline-secondary"
                style={{ backgroundColor: '#1C7293', color: 'white' }}>Add Event</button>
            </Link>

          </div>

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
                
                <th scope='col'></th>
                <th scope='col'></th>
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
                  
                  <td>

                  <Link to={`/edit/${event._id}`}>
                    <button className='btn btn-info' style={{backgroundColor: '#065A82',color: 'white'}} type='button' id='EditButton'>
                      Edit
                    </button>
                  </Link>
                    
                  </td>
                  <td>
                    <button className='btn btn-danger' type='button' id='DeleteButton' onClick={() => deleteCourse(event._id )}>Delete</button>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default AllEvents;