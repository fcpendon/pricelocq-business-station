import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CheckIcon from '@mui/icons-material/Check';

const ListStationsTable = (props) => {
  return (
    <Table>
      <caption>Total Items: {props.count}</caption>
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
        {props.stations.map(row => (
          <TableRow key={row.stationId}>
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
  );
}

export default ListStationsTable;