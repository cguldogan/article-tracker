import React from 'react';

const DateSelector = ({ selectedDate, onDateChange }) => {
    const changeDate = (days) => {
        const currentDate = new Date(selectedDate);
        currentDate.setDate(currentDate.getDate() + days);
        onDateChange(currentDate.toISOString().split('T')[0]);
    };

    return (
        <div className="date-selector mb-4">
            <button style={{ marginRight: '10px' }} onClick={() => changeDate(-1)}>&larr;</button>
            <label htmlFor="date">Select Date: </label>
            <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => onDateChange(e.target.value)}
                style={{ margin: '0 10px' }}
            />
            <button style={{ marginLeft: '10px' }} onClick={() => changeDate(1)}>&rarr;</button>
        </div>
    );
};

export default DateSelector;