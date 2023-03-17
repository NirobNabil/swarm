const express = require('express')
const ShelfHandler = require('../RobotHandlers/ShelfHandler')
const ProductHandler = require('../RobotHandlers/ProductHandler')
const BotCommandsHandler = require('../RobotHandlers/BotCommandsHandler')
const BotStateHandler = require('../RobotHandlers/BotStateHandler')
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
    if( shelf.products.find( p_id => p_id == product_id ) ) return true;
    else return false;
  } );

  console.log("order received for ", ShelfHandler.getShelves());

  if( shelf === undefined ) res.json( {"status": "error", "message": "product not found"} );
  else {
    console.log("order received for ", shelf.id);
    BotCommandsHandler.bringProductFromShelf( shelf.id, product_id );
    // var dist = path.minDistance(gameBoard, 0, 0, shelf.positions[0].x, shelf.positions[0].y);
    // console.log(dist);
    res.json( {"status": "success", "message": "Product found and it's on your way"} );
  }
} )

app.post('/addProductToShelf/:shelfId/:productId', (req, res) => {
  const shelfId = req.params.shelfId;
  const productId = parseInt(req.params.productId);

  BotCommandsHandler.addNewProductToShelf( shelfId, productId );

  // console.log(ShelfHandler.getShelf(shelfId))

})

app.post('/addProduct/:name/:weight', (req, res) => {
  const name = req.params.name;
  const weight = parseInt(req.params.weight);
  const products = ProductHandler.getProducts();
  const newId = String(parseInt(products[products.length-1].id) + 1);

  ProductHandler.updateProducts( [...products, {
    id: newId,
    name: name,
    weight: weight
  }] )

  console.log(ProductHandler.getProducts())

})

app.get('/botStates', (req,res,next) => {
  const botStates = BotStateHandler.getBotStates();

  res.status(400).send( JSON.stringify(botStates) );
  next();

})


exports.start = (port) => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}
