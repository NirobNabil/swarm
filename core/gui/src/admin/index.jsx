import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid2 from '@mui/material/Unstable_Grid2';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import JSONViewer from 'react-json-viewer';


import api from '../api';
import { getShelves, getProducts } from '../data/warehouse'
import AddProduct from './AddProduct';
import AddShelf from './AddShelf';
import Background from '../static/home_background.svg'
import BotStatesViewer from './BotStatesViwer';

export default function() {
  const [selectedShelf, setSelectedShelf] = React.useState(1);
  const [selectedProduct, setSelectedProduct] = React.useState(1);
  const [shelves, setShelves] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [botStates, setBotStates] = React.useState({});
  const [botStateInterval, setBotStateInterval] = React.useState(null);

  React.useEffect(() => {
		api.getProducts().then( data => {
			setProducts(data);
		} );
    api.getShelves().then( data => {
			console.log(data);
      setShelves(data);
		} );
    if( botStateInterval == null ) {
      setBotStateInterval(setInterval(updateBotStates, 1000));
    }
	}, [])

  React.useEffect( () => {
    console.log("new botstate ", botStates);
  }, [botStates] ); 

  let g = 0;
  const updateBotStates = () => {
    console.log("called", g);
    g+= 1;
    api.getBotStates().then( data => {
      console.log("got data ", data);
      setBotStates(data);
    } )
  }

  const handleShelfSelect = (e) => {
    setSelectedShelf(e.target.value);
  };

  const handleProductSelect = (e) => {
    setSelectedProduct(e.target.value)
  }

  const handleAddProductToShelf = () => {
    api.addProductToShelf( selectedProduct, selectedShelf );
  }

  return (
    <Grid2 container >
      
      <img style={{
        position: 'fixed',
        width: '100vw',
        top: '0',
        left: '0',
				zIndex: '-11'
      }} src={Background} className="App-logo" alt="logo" />

      <Grid2 xs={6} >
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
              value={selectedProduct}
              label="Shelf"
              onChange={handleProductSelect}
            >
              {products.map(product => (
                <MenuItem value={product.id}>{product.name}</MenuItem>
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
              {shelves.map(shelf => (
                <MenuItem value={shelf.id}>{shelf.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button onClick={handleAddProductToShelf} > Add to shelf </Button>
        </Box>
      </Grid2>

      <Grid2 xs={6} >
        <AddProduct />
      </Grid2>

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
          {/* <JSONViewer
            json={botStates}
          /> */}
          <BotStatesViewer botStates={botStates} />
        </Box>
      </Grid2>


      {/* <Grid2 xs={6} >
        <AddShelf />
      </Grid2> */}
    </Grid2>
  );
}