import * as React from 'react';
import Table from '@mui/joy/Table';

export default function BasicTable({data}) {
    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <Table aria-label="basic table">
      <thead>
        <tr>
          <th>previous Days</th>
          <th>feels like</th>
          <th>Temparature</th>
        
        </tr>
      </thead>
      <tbody>
      {data.list.splice(0, 7).map((item, idx) => (
        <tr key={idx}>
          <td>{forecastDays[idx]}</td>
          <td>{item.weather[0].description}</td>
          <td>{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</td>
        
        </tr>

      ))}
             </tbody>
    </Table>
  );
}