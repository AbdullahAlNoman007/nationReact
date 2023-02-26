import React, { useEffect, useState } from 'react';
import Person from '../person/Person';
import './Country.css'
const Country = () => {
    const [countries,setCountries]= useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>All Countries of the World</h1>
            <div className='main-container'>
            {
            countries.map(country => <Person name={country}></Person>)
            }
            </div>
        </div>
    );
};
export default Country;