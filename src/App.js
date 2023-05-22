import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import BasicCard from './components/card/card';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import BasicTable from './components/search/table/table';

import axios from 'axios';
import { GEO_API_URL, geoApiOptions } from './apis';
import { WEATHER_API_URL, WEATHER_API_KEY } from './apis';
import Search from './components/search/search';




function App() {

  const [inputValue, setInputValue] = React.useState('');

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
        console.log(currentWeather);
      })

      .catch(console.log);
  };

  return (
    <Box
      sx={{
        py: 2,
        display: 'grid',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: '100%',
      }}
    >
      <Typography
        variant="h1"
        color="primary"
        sx={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          width: '100%',
        }}
      >
        Weather App
        <Typography variant="outlined" color="success" sx={{ fontSize: '1rem' }}>
          Ominify test ✅
        </Typography>
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <div className="container">
        <Search  onSearchChange={handleOnSearchChange}/>
      </div>
        {/* <Input
          placeholder="Search your Location"
          size="md"
          style={{
            width: '100%',
            maxWidth: '500px',
            margin: '0 auto',
            padding: '0 1rem',
            marginRight: '0.5rem', // Add this line to reduce right margin
            marginLeft: '0.5rem', // Add this line to reduce left margin
          }}

          onChange={handleOnSearchChange}
          endDecorator={
            <FmdGoodIcon
             
              sx={{
                color: 'darkblue',
              }}
            />
          }
        /> */}
        {/* <Button sx={{ margin: 'auto', padding: '0 1rem' }} >Search</Button> */}
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          
        }}
      >
        <Sheet
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '1rem',
          }}
        >
       
          {currentWeather && <BasicCard data={currentWeather} />}
      {forecast && <BasicTable data={forecast} />}
        </Sheet>
      </Box>
    </Box>
  );
}

export default App;
