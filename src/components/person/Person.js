import React from 'react';
import "./Person.css";
const Person = (props) => {
    const {name,capital,area,population,region,flags }=props.name
    return (
        <div className='container'>
            <h2>Country: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
        </div>
    );
};
export default Person;