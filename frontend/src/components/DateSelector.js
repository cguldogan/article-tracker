import React from 'react';

const DateSelector = ({ selectedDate, onDateChange }) => {
    return (
        <div className="date-selector mb-4">
            <label htmlFor="date">Select Date: </label>
            <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => onDateChange(e.target.value)}
            />
        </div>
    );
};

export default DateSelector;