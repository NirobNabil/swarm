import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid2 from '@mui/material/Unstable_Grid2';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';


import { getShelves, getProducts } from '../data/warehouse'
import AddProduct from './AddProduct';
import AddShelf from './AddShelf';
import Background from '../static/home_background.svg'

export default function() {
  const [selectedShelf, setSelectedShelf] = React.useState(1);

  const handleShelfSelect = (e) => {
    setSelectedShelf(e.target.value);
  };

  const shelves = getShelves();
  const products = getProducts();

  return (
    <Grid2 container >
      
      <img style={{
        position: 'fixed',
        width: '100vw',
        top: '0',
        left: '0',
				zIndex: '-11'
      }} src={Background} className="App-logo" alt="logo" />

      <Grid2 xs={12} >
        <Box sx={{
          padding: '2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          margin: '2rem',
					background: '#FEFEFE',
					borderRadius: '.5rem',
        }} >
          <label>Add Product to shelf</label>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Product</InputLabel>
            <Select
              value={selectedShelf}
              label="Shelf"
              onChange={handleShelfSelect}
            >
              {Object.keys(products).map(key => (
                <MenuItem value={key}>{products[key].name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Shelf</InputLabel>
            <Select
              labelId="simple-select-label"
              id="demo-simple-select"
              value={selectedShelf}
              label="Shelf"
              onChange={handleShelfSelect}
            >
              {Object.keys(shelves).map(key => (
                <MenuItem value={key}>{shelves[key].name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button> Add to shelf </Button>
        </Box>
      </Grid2>

      <Grid2 xs={6} >
        <AddProduct />
      </Grid2>


      {/* <Grid2 xs={6} >
        <AddShelf />
      </Grid2> */}
    </Grid2>
  );
}