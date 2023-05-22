import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../apis";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
      return fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      )
        .then((response) => response.json())
        .then((response) => {
          
          
          return {
        
            options: response.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600} 
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={{
        control: (provided) => ({
            ...provided,
            width: 300,
            margin: 10,
            borderRadius: 10,
            border: '1px solid #ccc',
            fontSize: 16,
            fontFamily: 'Roboto',
            color: '#000',
            boxShadow: 'none',
            '&:hover': {
                border: '1px solid #ccc',
            },
        }),
        option: (provided) => ({
            ...provided,
            fontSize: 16,
           
            color: '#000',
            '&:hover': {
                backgroundColor: '#ccc',
            },
        }),
        menu: (provided) => ({
            ...provided,
            width: 300,
            margin: 10,
            borderRadius: 10,
            border: '1px solid #ccc',
            fontSize: 16,
            fontFamily: 'Roboto',
            boxShadow: 'none',
            '&:hover': {
                border: '1px',
            },
        }),
        menuList: (provided) => ({
            ...provided,
            fontSize: 16,
            
            color: '#000',
            '&:hover': {
                
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            fontSize: 16,
            fontFamily: 'Roboto',
          
            color: '#000',
        }),
        input: (provided) => ({
            ...provided,
            fontSize: 16,
           fontFamily: 'Roboto',
            color: '#000',
        }),
        placeholder: (provided) => ({
            ...provided,
            fontSize: 16,
            fontWeight: 'bold',
           fontFamily : 'Roboto',
            color: 'grey',
        }),



      }}
          />
  );
};

export default Search;
