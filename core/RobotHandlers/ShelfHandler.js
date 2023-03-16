const shelves = [
  {
    id: '1',
    name: 'shelf 1',
    poisitions: [
      { x: 3, y: 4 },
      { x: 3, y: 3 },
      { x: 3, y: 2 },
    ],
    products: [1,2]
  },
  {
    id: '2',
    name: 'shelf 2',
    positions: [
      { x: 5, y: 6 },
      { x: 5, y: 5 },
      { x: 5, y: 4 },
    ],
    products: [1,2,3]
  },
  {
    id: '3',
    name: 'shelf 3',
    positions: [
      { x: 8, y: 1 }
    ],
    products: []
  },
  {
    id: '4',
    name: 'shelf 4',
    positions: [
      { x: 1, y: 8 },
      { x: 1, y: 7 },
    ],
    products: []
  }
]



exports.getShelves = () => shelves;

exports.updateShelf = (shelf_name, data) => {
  let index = shelves.findIndex( shelf => shelf.name == shelf_name );
  shelves[index] = {
    ...shelves[index],
    ...data
  };
} 