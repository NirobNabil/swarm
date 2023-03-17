
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { getShelves, getProducts } from '../data/warehouse'
import { useState } from 'react';

import { addProductToList } from '../api';


export default () => {

  const products = getProducts();

  const [product, setProduct] = useState(products['1'])

  const handleAddProduct = () => {
    console.log(product)
    addProductToList( product.name, product.weight )
  }

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
      <label>Add Product To list</label>

      <FormControl fullWidth>
        <TextField label="Name" onChange={(e)=>{ setProduct( {...product, name: e.target.value} ) }} />
      </FormControl>

      <FormControl fullWidth>
        <TextField label="Weight" onChange={(e)=>{ setProduct( {...product, weight: e.target.value} ) }} />
      </FormControl>

      <Button onClick={handleAddProduct} > Add to list </Button>

    </Box>
  )
}