let shelves = {
    1: {
        name: "Shelf 1",
        products: []
    },
    2: {
        name: "Shelf 2",
        products: []
    },
    3: {
        name: "Shelf 3",
        products: []
    }
}

let products = {
    1: {
        name: "product 1",
        weight: 50,
    },
    2: {
        name: "product 2",
        weight: 30,
    },
    3: {
        name: "product 3",
        weight: 60,
    }
}

export const getShelves = () => shelves;
export const updateShelves = (shelves_t) => shelves = shelves_t;

export const getProducts = () => products;
export const updateProducts = (products_t) => products = products_t;

