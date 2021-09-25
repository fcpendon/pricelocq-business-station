import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';

const ListStations = (props) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(10);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    getStations();
  }, []);

  function getStations() {
    const stationsAPI = 'https://staging.api.locq.com/ms-fleet/station?searchKey=' + search + '&page=' + page + '&perPage=' + items;

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.user.token,
      },
    };

    fetch(stationsAPI, requestOptions)
      .then(response => response.json())
      .then(data => setStations(data.data.stations));
  }

  return (
    <Paper style={{width: 1200, margin: "20px auto", padding: 20}}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField label="Search by station name" variant="standard" />
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Station Name</TableCell>
            <TableCell>City/Province</TableCell>
            <TableCell>Diesel</TableCell>
            <TableCell>Gas 91</TableCell>
            <TableCell>Gas 95</TableCell>
            <TableCell>Gas 97</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stations.map(row => (
            <TableRow>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.city}, {row.province}</TableCell>
              <TableCell>{row.stationProduct.diesel && <CheckIcon />}</TableCell>
              <TableCell>{row.stationProduct.gas91 && <CheckIcon />}</TableCell>
              <TableCell>{row.stationProduct.gas95 && <CheckIcon />}</TableCell>
              <TableCell>{row.stationProduct.gas97 && <CheckIcon />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ListStations;