import React, { useState, useEffect } from 'react';
import ListStationsPagination from './ListStationsPagination';
import ListStationsSearch from './ListStationsSearch';
import ListStationsTable from './ListStationsTable';
import LoadingSpinner from './LoadingSpinner';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const ListStations = (props) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [stations, setStations] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();

  useEffect(() => {
    setLoading(true);
    setMessage('No results found');
    getStations();
  }, [search, page, perPage]);

  const getStations = () => {
    const stationsAPI = 'https://staging.api.locq.com/ms-fleet/station?searchKey=' + search  + '&page=' + page+ '&perPage=' + perPage;

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.user.token,
      },
    };

    setStations([]);

    fetch(stationsAPI, requestOptions)
      .then(response => response.json())
      .then(data => {
        setStations(data.data.stations);
        setCount(data.data.count);
        setLoading(false);
      })
      .catch(error => {
        setMessage('Sorry, we have encountered an error');
        setLoading(false);
      });

  }

  return (
    <Paper style={{width: 1200, margin: '0px auto 40px', padding: 20}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <ListStationsSearch setSearch={setSearch} setPage={setPage} />
        <ListStationsPagination setPage={setPage} perPage={perPage} setPerPage={setPerPage} count={count}/>
      </Box>
      {loading
        ? <LoadingSpinner />
        : count
          ? <ListStationsTable stations={stations} count={count} />
          : <div>{message}</div>
      }
    </Paper>
  );
}

export default ListStations;