
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Grid2 from '@mui/material/Unstable_Grid2';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { getShelves, getProducts } from '../data/warehouse'
import { useState } from 'react';


export default () => {

  const shelves = getShelves();

  const [shelf, setShelf] = useState(shelves['1'])

  return (
    <Box sx={{
      padding: '2rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      margin: '2rem',
    background: '#FEFEFE',
    borderRadius: '.5rem',
    }} >
      <label>Add Shelf to Warehouse</label>

      <FormControl fullWidth>
        <TextField label="Name" onChange={(e)=>{ setShelf( {...shelf, name: e.target.value} ) }} />
      </FormControl>

      {/* <FormControl fullWidth>
        <TextField label="Weight" onChange={(e)=>{ setShelf( {...shelf, weight: e.target.value} ) }} />
      </FormControl> */}

    </Box>
  )
}