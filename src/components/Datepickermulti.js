//DatePicker 
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'



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

    //Validation date not null 
    if (startDate && endDate !== null) {
        sameMonthandYear()
    }
    //Diferences 
    function sameMonthandYear() {

        var correctStartDate = moment(startDate, 'YYYY');
        var correctEndDate = moment(endDate, 'YYYY-MM-DD');
        var diferenceDays = correctEndDate.diff(correctStartDate, 'days');
        var NextMonth = moment(correctEndDate).isAfter(correctStartDate, 'months');
        var StartDay = moment(correctStartDate).get('date')
        var EndDay = moment(correctEndDate).get('date')

        //Validate same month and create days array
        if (diferenceDays <= 30 && NextMonth === false) {
            var dates = [];
            for (let i = StartDay; i <= EndDay; i++) {
                dates = [i]
                console.log(dates)
            }

        }
    }

    return (
        <div>
            <h6>Seleccion de Fechas</h6>
            <DatePicker
                selected={startDate}
                onChange={onChange}
                dateFormat="dd//MM/yyyy"
                startDate={startDate}
                endDate={endDate}
                selectsRange
                isClearable
            />
        </div>
    )
}


