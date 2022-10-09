import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridCellParams, useGridApiRef } from '@mui/x-data-grid';
import axios from 'axios';
import { v4 } from "uuid";

import moment from "moment";

function BCurrencyDataGrid() {
    const curUrl = "https://gateway.cept.gov.in/currency/getexchangerates/0";

    var config = {
 
        headers: {
          "x-request-id": v4(),
          "request-date": moment().toISOString(true),
        },
    
      };

   

   const [tblData, setTblData] = useState([])
    
const call1 =()=>{
  axios.get(curUrl,config)
  .then(function(res){          
      setTblData(res.data);
  })
}

      useEffect(() => {  
        call1();
         }, [])


  
  

const putApi = (params) =>{

 
  console.log(exrate)
  console.log(params)
  
  const updtUrl = `https://rictapi.cept.gov.in/currency/update/${params.row.id}`
  const updtData = {
    "exchangerate":exrate,
    "updatedat" : moment().toISOString(true)
    
  
  }

  axios.put(updtUrl,updtData,config)
  .then(function(res){
    call1();
    alert(res.data.message);
    console.log(params.row)
    
  })
  
}
        let exrate

       
      
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
              preProcessEditCellProps: (params)=>{              
                console.log(params.props)                 
                  exrate = params.props.value                 
                    
              }
                    
              
              
                                         
                },
            {
              field: 'updatedat',
              headerName: 'Last Updated',
              type: 'dateTime',
              width: 220,
              editable: false,
            },
            {
              field: 'actions',
              headerName: 'Actions',
              width: 220,
              editable: false,
                            
            },
          ];

          const currencyFormatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'INR',
          });
         

  return (
    <Box
      sx={{
        height: 800,
        width: '100%',
        '& .MuiDataGrid-cell--editable': {
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#376331' : 'rgb(217 243 190)',
        },
      }}
    >
      <DataGrid
        rows={tblData}
        columns={columns}
        density= 	'standard'
         onCellEditStop={putApi}
        experimentalFeatures={{ newEditingApi: true }}           
                    />
             </Box>
 )
}

export default BCurrencyDataGrid