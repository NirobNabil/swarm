let products = [
    {
        id: '1',
        name: "Nivea Facewash",
        weight: 50,
    },
    {
        id: '2',
        name: "Quarks Oatmeal",
        weight: 25,
    },
    {
        id: '3',
        name: "Aarong milk",
        weight: 40,
    },
    {
        id: '4',
        name: "Eggs",
        weight: 10,
    }
]


exports.getProducts = () => products;
exports.getProduct = (productId) => products.find( p => p.id == productId );
exports.updateProducts = (products_t) => products = products_t;