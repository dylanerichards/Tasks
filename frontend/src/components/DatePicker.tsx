// src/components/Datepicker.tsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

interface DatepickerProps {
  onDateChange: (date: Date | null) => void;
  defaultDate?: Date;
}

const Datepicker: React.FC<DatepickerProps> = ({ onDateChange, defaultDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);


  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div className="flex flex-col space-y-2">
      <DatePicker
        selected={selectedDate || defaultDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholderText="Due Date"
      />
    </div>
  );
};

export default Datepicker;
