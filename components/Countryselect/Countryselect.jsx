import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl } from '@material-ui/core';
import styles from './Countryselect.module.css';
import { fetchCountries } from '../../api';


const Countryselect = () => {

    const[fetchedCountries, setFetchedCountries] = useState([]);

useEffect(() => {
    const fetchAPI = async () => {
         setFetchedCountries(await fetchCountries());
    }

    fetchAPI();
}, [setFetchedCountries]);





    return(
      <FormControl className={styles.formControl}>
          <Select >
             <MenuItem value="global">Global</MenuItem> 
             {fetchedCountries.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}
          </Select>
      </FormControl>  
    )
}

export default Countryselect;