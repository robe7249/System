//DatePicker 
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function Datepicerkmulti() {

    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    if (startDate && endDate !== null) {
        comparateDates()
    }

    function comparateDates() {
        const yearStart = startDate.getFullYear(null)
        const yearEnd = endDate.getFullYear(null)
        const monthStart = startDate.getMonth(null)
        const monthEnd = endDate.getMonth(null)
        const dayStart = startDate.getDate(null)
        const dayEnd = endDate.getDate(null)


        if (yearStart === yearEnd && monthStart === monthEnd) {
            calculateCells(dayStart, dayEnd)
        } else {
            alert("El mes y año deben ser iguales")
        }
    }


    function calculateCells(dayStart, dayEnd) {
        const totalCells = (dayEnd - dayStart) + 1
        console.log(totalCells)
    }

    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                dateFormat='dd/MM/yyyy'
                isClearable
            />
        </div>
    )
}


