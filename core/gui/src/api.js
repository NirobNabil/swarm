
const API_BASE = 'http://localhost:4000';

exports.getShelves = () => {
    return fetch(API_BASE+'/shelves')
        .then((response) => response.json())
}

exports.getProducts = () => {
    return fetch(API_BASE+'/products')
        .then((response) => response.json())
}

exports.orderProduct = (productId) => {
    return fetch( API_BASE + '/order/' + productId, { 
            method: 'POST',
            mode: 'cors', 
            body: JSON.stringify({moreData: "no data"})
        } )
        .then( response => response.json() )
}
