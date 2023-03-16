const express = require('express')
const ShelfHandler = require('../RobotHandlers/ShelfHandler')
const ProductHandler = require('../RobotHandlers/ProductHandler')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors());

// const port = 4000

// shelf array
app.get('/shelves', (req, res) => {
  res.json( ShelfHandler.getShelves() )
})

app.get('/products', (req, res) => {
  res.json( ProductHandler.getProducts() )
})

app.post('/order/:productId', (req,res) => {
  const product_id = req.params.productId;
  const shelf = ShelfHandler.getShelves().find( shelf => {
    console.log(shelf);
    if( shelf.products.find( p_id => p_id == product_id ) ) return true;
    else return false;
  } );

  console.log(shelf);

  if( shelf === undefined ) res.json( {"status": "error", "message": "product not found"} );
  else {
    console.log("order received for ", shelf.id);
    // var dist = path.minDistance(gameBoard, 0, 0, shelf.positions[0].x, shelf.positions[0].y);
    // console.log(dist);
    res.json( {"status": "success", "message": "Product found and it's on your way"} );
  }
} )


exports.start = (port) => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}
