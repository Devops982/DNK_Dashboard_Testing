import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { v4 } from 'uuid';
import moment from 'moment/moment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';

function BCurrencyDataGrid() {
        /* Defining Headers for Axios*/

const ExchangeRateURL =  "https://gateway.cept.gov.in/currency/getexchangerates/0";
var config = {
                headers: {
                         "x-request-id": v4(),
                        "request-date":moment().toISOString(true),
                    },
             }  

/* Declaring and Initializing Currency Variable using 
useState*/

const [currencyArray, setcurrencyArray] = useState([])

/* Calling API Values using axios and 
rendering on page loading using useEffect*/
        const FetchCall=()=>{
        axios.get(ExchangeRateURL,config)
        .then(function(res){
        console.log(res.data)
        setcurrencyArray(res.data)
        })
        }

        useEffect(() => {
        FetchCall();
        }, [])
 /* Handler for getting Selected currency value
from drop down and displaying in the input text box*/
const [selectedCurrency, setselectedCurrency] = useState("")
const [txtVal, setTxtVal] = useState("")
const [currencyid, setcurrencyid] = useState("")
const handleChange = (event) => {       
   setselectedCurrency(event.target.value);

   var val1 = currencyArray.filter((item) => item.id === event.target.value)
   
   console.log(val1)
    
   setTxtVal(val1[0].exchangerate);
   setcurrencyid(val1[0].id)
    
 };
/* Handler for updating edited ExchangeRate*/

const updateExchangeRate=()=>{
   const updateApiUrl = `https://rictapi.cept.gov.in/currency/update/${currencyid}`
   const updateData = {
       "exchangerate":txtVal,
       "updatedat" : moment().toISOString(true)  
     }
    axios.put(updateApiUrl,updateData,config) 
    .then(function(res){
       alert(res.data.message);
       FetchCall();
    })
   alert ("Updated");
}
    const columns = [
        { field: 'currency', headerName: 'CurrencyName', width: 250, editable: false },
        { field: 'isocode', headerName: 'Currency ISO Code',width: 180,  editable: false },
        {
          field: 'exchangerate',
          headerName: 'Exchange Rate',
          valueFormatter: ({ value }) => currencyFormatter.format(value),
          type: 'number',
          width: 350,
          editable: true,                            
            },
        {
          field: 'updatedat',
          headerName: 'Last Updated',
          type: 'dateTime',
          width: 220,
          editable: false,
        },
             ];

      const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
      });
  return (
    <div>
        <div style={{ height: 400, width: '100%',p: 2 }}>

        <Stack direction="row" spacing={2} style={{padding:'1em'}}>   
        <Stack >
        <TextField
        select
        value={selectedCurrency}
        label="Select Currency"
        onChange={handleChange}        
    
    style={{width: 220}}
        >
        {currencyArray.map((item)=>(
        <MenuItem value={item.id}>{item.currency}</MenuItem>))}
        </TextField>
        </Stack>
        <Stack>
        <TextField id="outlined-basic" onChange={(e)=>setTxtVal(e.target.value)} value={txtVal} variant="outlined" />  
        </Stack>
        <Stack>
        <Button onClick={updateExchangeRate} variant="contained" >
        Update Currency Rate 
        </Button> 
        </Stack>  
        </Stack> 
        <DataGrid
            rows={currencyArray}
            columns={columns}
            sx={{
                bgcolor: 'White',
               }}   />
       
        </div>
        </div>
  )
}

export default BCurrencyDataGrid