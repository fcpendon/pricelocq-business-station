import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

const ListStationsPagination = (props) => {
  const perPage = props.perPage;

  const handleChangePerPage = (e) => {
    props.setPerPage(e.target.value);
    props.setPage(1);
  };

  const handleChangePage = (e, newPage) => {
    props.setPage(newPage);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Stack mt={2}>
        <Pagination count={parseInt(props.count / perPage, 10) + 1} onChange={handleChangePage} />
      </Stack>
      <FormControl variant="standard" sx={{ width: 100 }}>
        <InputLabel id="per-page-label">Per Page</InputLabel>
        <Select
          value={perPage}
          id="per-page-label"
          onChange={handleChangePerPage}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default ListStationsPagination;