//DatePicker 
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



export default function Datepickersimple() {

    // const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(null)


    return (
        <div>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                isClearable
                scrollableMonthYearDropdown
            />
        </div >
    )

}

