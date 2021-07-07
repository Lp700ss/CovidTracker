import React , {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './Date.module.css';

import {fetchDailyData} from '../../API';


const DateFilter = ({handleDateFilter}) => {
    const [fetchDailyData1, setFetchedDailyData] = useState([]);

    useEffect(()=>{
        const fetchAPI = async () =>{
            setFetchedDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, [setFetchedDailyData])
    console.log(fetchDailyData1);
    return (
        <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleDateFilter(e.target.value) } variant="filled">
        <option value=""> DateTime </option>
        {fetchDailyData1.map((Date,i) => <option key={i} value={Date}>
        {Date}</option>)}
        </NativeSelect>
        </FormControl>
    )
      
}
export default DateFilter;