let products = [
    {
        id: '1',
        name: "product 1",
        weight: 50,
    },
    {
        id: '2',
        name: "product 2",
        weight: 30,
    },
    {
        id: '3',
        name: "product 3",
        weight: 60,
    }
]


exports.getProducts = () => products;
exports.updateProducts = (products_t) => products = products_t;