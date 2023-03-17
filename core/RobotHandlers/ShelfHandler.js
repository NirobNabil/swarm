const shelves = [
  {
    id: '1',
    name: 'shelf 1',
    positions: [
      { x: 3, y: 2 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
    ],
    products: [2]
  },
  {
    id: '2',
    name: 'shelf 2',
    positions: [
      { x: 5, y: 5 },
      { x: 5, y: 6 },
      { x: 5, y: 7 },
    ],
    products: [1]
  },
  {
    id: '3',
    name: 'shelf 3',
    positions: [
      { x: 8, y: 1 }
    ],
    products: [1]
  },
  {
    id: '4',
    name: 'shelf 4',
    positions: [
      { x: 1, y: 7 },
      { x: 1, y: 8 },
    ],
    products: [1]
  },
  {
    id: '5',
    name: 'shelf 5',
    positions: [
      { x: 3, y: 10 },
      { x: 3, y: 11 },
    ],
    products: [2]
  },
  {
    id: '6',
    name: 'shelf 6',
    positions: [
      { x: 8, y: 11 },
      { x: 9, y: 11 },
      { x: 10, y: 11 },
      { x: 11, y: 11 },
      { x: 12, y: 11 },
    ],
    products: [4]
  },
  {
    id: '7',
    name: 'shelf 7',
    positions: [
      { x: 8, y: 8 },
      { x: 9, y: 8 },
      { x: 10, y: 8 },
      { x: 11, y: 8 },
      { x: 12, y: 8 },
    ],
    products: [3]
  },
]



exports.getShelves = () => shelves;

exports.getShelf = (shelfId) => shelves.find( shelf => shelf.id == shelfId ) 

exports.updateShelf = (shelf_id, data) => {
  let index = shelves.findIndex( shelf => shelf.id == shelf_id );
  shelves[index] = {
    ...shelves[index],
    ...data
  };
} 