const API_BASE = 'http://localhost:4001';

exports.getShelves = () => {
    return fetch(API_BASE+'/shelves')
        .then((response) => response.json())
}

exports.getProducts = () => {
    return fetch(API_BASE+'/products')
        .then((response) => response.json())
}

exports.getBotStates = () => {
    return fetch( API_BASE + '/botStates' )
        .then( response => response.json() )
}

exports.orderProduct = (productId) => {
    return fetch( API_BASE + '/order/' + productId, { 
            method: 'POST',
            mode: 'cors', 
            body: JSON.stringify({moreData: "no data"})
        } )
        .then( response => response.json() )
}

exports.addProductToShelf = (productId, shelfId) => {
    return fetch( API_BASE + `/addProductToShelf/${shelfId}/${productId}/`, { 
            method: 'POST',
            mode: 'cors', 
            body: JSON.stringify({"moreData": "nodata"})
        } )
        .then( response => response.json() )
}


exports.addProductToList = (name, weight) => {
    console.log(name, weight)
    return fetch( API_BASE + `/addProduct/${name}/${weight}`, { 
            method: 'POST',
            mode: 'cors', 
            body: JSON.stringify({weight: weight})
        } )
        .then( response => response.json() )
}
