import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Picker = () => {
    const [date,setDate]=useState(new Date())

    const changeDate=(date)=>{
       setDate(date)
    }
  return (
    <div  className="calendar" >
        <Calendar 
        value={date}
        onChange={changeDate} 
        
        />
        <p>Date choisie {date.toDateString()}</p>
    </div>
  )
}

export default Picker