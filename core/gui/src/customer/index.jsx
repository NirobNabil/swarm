import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid2 from '@mui/material/Unstable_Grid2';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

import { getShelves, getProducts } from '../data/warehouse';
import Background from '../static/home_background.svg'
import api from '../api';


export default function () {
	const [selectedProductId, setSelectedProductId] = React.useState(1);

	const handleProductSelect = (e) => {
		setSelectedProductId(e.target.value);
	};

	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		api.getProducts().then( data => {
			setProducts(data);
		} );
	}, [])

	return (
		<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100vw',
					height: '100vh'
				}}
			>
			
			<img style={{
        position: 'fixed',
        width: '100vw',
        top: '0',
        left: '0',
				zIndex: '-11'
      }} src={Background} className="App-logo" alt="logo" />

			{/* <div style={{
				background: 'white',
        position: 'fixed',
        width: '100vw',
				height: '100vh',
        top: '0',
        left: '0',
				zIndex: '-1',
				opacity: '.8',
      }}> </div> */}

			
				<Box sx={{
					width: '50%',
					fontSize: '1.5rem',
					padding: '3rem 2rem',
					display: 'flex',
					flexDirection: 'column',
					gap: '1.5rem',
					margin: '2rem',
					background: '#FEFEFE',
					borderRadius: '1rem',
				}} >
					<label>Order Product</label>

					<FormControl fullWidth>
						<InputLabel> Select Product </InputLabel>
						<Select
							sx={{
								fontSize: '1.2rem'
							}}
							value={selectedProductId}
							label="Shelf"
							onChange={handleProductSelect}
						>
							{products.map( product => (
								<MenuItem value={product.id}>{product.name}</MenuItem>
							))}
						</Select>
					</FormControl>
					
					<Button onClick={() => api.orderProduct(selectedProductId) } variant="outlined" >
						Place Order
					</Button>

				</Box>
		</Box>
	);
}