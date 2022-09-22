import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function BCurrencyExchangeRate() {
  var axios = require("axios");
  var qs = require("qs");
  var data = qs.stringify({});
  var config = {
    method: "get",
    url: "https://gateway.cept.gov.in/currency/getexchangerates/0",
    headers: {
      "x-request-id": "123e4567-e89b-12d3-a456-426614174000",
      "request-date": "2022-01-25T15:52:.667+00:00",
    },
    data: data,
  };
  const [currencyRates, setCurrencyRates] = useState([]);
  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCurrencyRates(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
       <Paper> <Typography variant="h5" align="center" sx={{fontWeight: 'bold'}}>Update Currency Values</Typography></Paper>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Curreny Name</TableCell>
              <TableCell align="right">Indian Rupee Value</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencyRates.map((post) => (
              <TableRow
                key={post.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {post.currency}
                </TableCell>
                <TableCell align="right">{post.exchangerate}</TableCell>
                <TableCell align="right">Edit</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BCurrencyExchangeRate;
