import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const EditEvent = () => {

   const { id  } = useParams();

    const navigate = useNavigate();

    const [event, setEvent] = useState({});
    const [eventName, seteventName] = useState('');
    
    const [location, setLoaction] = useState('');
    const [startingTime, setStartingTime] = useState('');
    const [date, setDate] = useState('');
    const [timeDuration, setTimeDuration] = useState('');
   

    useEffect(() => {
        axios.get(`http://localhost:8070/event/${id}`).then((res) => {
            setEvent(res.data);
            seteventName(res.data.eventName);
            setLoaction(res.data.location);
            setStartingTime(res.data.startingTime);
            setDate(res.data.date);
            setTimeDuration(res.data.timeDuration);
           
        }).catch((err) => {
            alert(err.message);
        });
    }, [id ]);

    const handleUpdate = (event) => {
        event.preventDefault();
        const updateEvent = {
            eventName,
            location,
            startingTime,
            date,
            timeDuration,
            
        };
        axios.put(`http://localhost:8070/event/update/${id }`, updateEvent).then((res) => {
            Swal.fire(
                'Updated !',
                'You clicked the button!',
                'success'
              )
        }).catch((err) => {
            alert(err.message);
        });
    };

    return (
        <div>

            {/* <Sidebar /> */}

            <div style={{ width: '100%', float: 'right' }}>
                <h2>
                    <center>Edit Event Details</center>
                </h2>

                <div className='container' style={{width: '75%',marginTop: '50px'}}>

                    <form onSubmit={handleUpdate}>

                        <div className='form-group'>
                            <label>Event Name</label>
                            <input type='text' className='form-control' value={eventName} onChange={(e) => seteventName(e.target.value)} />
                        </div>

                        

                        <div className='form-group'>
                            <label>Loaction</label>
                            <input type='text' className='form-control' value={location} onChange={(e) => setLoaction(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>Starting Time</label>
                            <input type='text' className='form-control' value={startingTime} onChange={(e) => setStartingTime(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>Date</label>
                            <input type='text' className='form-control' value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>Time Duration</label>
                            <input type='text' className='form-control' value={timeDuration} onChange={(e) => setTimeDuration(e.target.value)} />
                        </div>

                     

                        <div style={{marginTop:'50px',width:'100%'}}>
                            <button type='submit' className='btn btn-primary' style={{width:'100%'}}>Update</button>
                        </div>

                        <div class="col-12" style={{marginTop:'25px',width:'100%'}}>
                            <Link to='/all'><button type="submit" class="btn btn-primary" style={{width:'100%'}}>All Events</button></Link>
                        </div>

                    </form>

                </div>

            </div>

        </div>

    );
};

export default EditEvent;