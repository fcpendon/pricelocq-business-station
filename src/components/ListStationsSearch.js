import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';

const ListStationsSearch = (props) => {
  const handleChangeSearch = (e) => {
    if (e.keyCode === 13) {
      props.setSearch(e.target.value);
      props.setPage(1);
    }
  }

  return (
    <Box>
      <SearchIcon sx={{ color: 'action.active', mr: 1, my: 2.5 }} />
      <Tooltip title="Press ENTER to search" placement="right-end">
        <TextField label="Search by Station Name" variant="standard" sx={{ width: 300 }} onKeyDown={handleChangeSearch} autoFocus />
      </Tooltip>
    </Box>
  );
}

export default ListStationsSearch;