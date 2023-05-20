import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddEvent = () => {

    const [eventID, SeteventID] = useState("");
    const [eventName, SeteventName] = useState("");
    const [location, Setlocation] = useState("");
  
    const [startingTime, SetstartingTime] = useState("");
    const [date, Setdate] = useState("");
    const [timeDuration, SettimeDuration] = useState("");
   

    function sendData(event) {
        event.preventDefault();

        const newevent = {
            eventID,
            eventName,
            location, 
            startingTime,
            date,
            timeDuration,
         
        }

        axios.post("http://localhost:8070/event/add", newevent).then(() => {
            Swal.fire(
                'Successful !',
                'event Added!',
                'success'
              )
        }).catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        })
    }

    return (
        <div>

            <div className='container' style={{ width: '100%', float: 'right'}}>

                <center><h2>Add Event</h2></center>

                <div style={{ marginTop: '50px'}}>

                    <form class="row g-3">


                    <div class="col-md-6">
                            <label class="form-label">Event ID</label>
                            <input type="text" class="form-control" id="inputTeachersName" placeholder='Event ID' required
                                onChange={(event) => {
                                    SeteventID(event.target.value)
                                }} />
                        </div>


                    <div class="col-md-6">
                            <label class="form-label">Event Name</label>
                            <input type="text" class="form-control" id="inputTeachersName" placeholder='Event Name' required
                                onChange={(event) => {
                                    SeteventName(event.target.value)
                                }} />
                        </div>


                        <div class="col-md-6">
                            <label class="form-label">Loaction</label>
                            <input type="text" class="form-control" id="inputTeachersName" placeholder='Loaction' required
                                onChange={(event) => {
                                    Setlocation(event.target.value)
                                }} />
                        </div>

                        

                        <div class="col-md-2">
                            <label class="form-label">Starting Time</label>
                            <input type="text" class="form-control" id="inputStartingTime" placeholder="11.00 a.m" require
                                onChange={(event) => {
                                    SetstartingTime(event.target.value)
                                }} />
                        </div>

                        <div class="col-6">
                            <label class="form-label">date</label>
                            <input type="date" class="form-control" id="inputDate" placeholder="Wednesday" require
                                onChange={(event) => {
                                    Setdate(event.target.value)
                                }} />
                        </div>

                        <div class="col-md-4">
                            <label class="form-label">Time Duration (Hours)</label>
                            <input type="text" class="form-control" id="inputTimeDuration" placeholder='02' require
                                onChange={(event) => {
                                    SettimeDuration(event.target.value)
                                }} />
                        </div>

                        
                        <div class="col-12" style={{width: '100%'}}>
                            <button type="submit" class="btn btn-primary" onClick={sendData} style={{width:'100%'}}>Add event</button>
                        </div>

                        <div class="col-12" style={{width: '100%'}}>
                            <Link to='/all'><button type="submit" class="btn btn-primary" style={{width:'100%'}}>All events</button></Link>
                        </div>

                    </form>

                </div>



            </div>

        </div>
    )
}

export default AddEvent