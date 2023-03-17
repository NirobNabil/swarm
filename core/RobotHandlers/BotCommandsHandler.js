const ShelfHandler = require('./ShelfHandler.js')
const taskHandler = require('../brain/taskHandler')
const productHandler = require('./ProductHandler')

const bringProductFromShelf = ( shelf_id, product_id ) => {
    
    const shelf = ShelfHandler.getShelf(shelf_id);
    
    const task = {
        initPos: { x: shelf.positions[0].x, y: shelf.positions[0].y },
        endPos: { x: 0, y: 0 },
        weight: productHandler.getProduct(product_id).weight
    }

    taskHandler.addNewTaskToSystem( task );

    let foundAlready = false;
    const newProductsArray = shelf.products.filter( (productId) => {
        if( productId == product_id && !foundAlready ) {
            foundAlready = true;
            return false;
        }
        return true;
    } )

    ShelfHandler.updateShelf( shelf_id, {
        products: newProductsArray
    } )
    
}

const addNewProductToShelf = (shelf_id, product_id) => {
    const shelf = ShelfHandler.getShelf(shelf_id);
    
    console.log(product_id);
    const task = {
        initPos: { x: 0, y: 0 },
        endPos: { x: shelf.positions[0].x, y: shelf.positions[0].y },
        weight: productHandler.getProduct(product_id).weight
    }

    taskHandler.addNewTaskToSystem( task );

    ShelfHandler.updateShelf( shelf_id, {
        products: [...shelf.products, product_id]
    } )
    

}

exports.bringProductFromShelf = bringProductFromShelf;
exports.addNewProductToShelf = addNewProductToShelf;