import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


export default function CCurrencyTableEdit() {
    const curUrl = "https://gateway.cept.gov.in/currency/getexchangerates/0";

    var config = {
 
        headers: {
          "x-request-id": "123e4567-e89b-12d3-a456-426614174000",
          "request-date": "2022-01-25T15:52:.667+00:00",
        },
    
      };

   

   const [tblData, setTblData] = useState([])
    
      useEffect(() => {
        axios.get(curUrl,config)
        .then(function(res){        
        
            setTblData(res.data);

        })
        
         }, [])

         const columns = [
            { field: 'currency', headerName: 'CurrencyName', width: 180, editable: false },
            { field: 'isocode', headerName: 'Currency ISO Code',width: 180,  editable: false },
            {
              field: 'exchangerate',
              headerName: 'Exchange Rate',
              type: 'number',
              width: 180,
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
             />
    </Box>
  );
}


