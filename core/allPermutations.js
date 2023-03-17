// const getCombos = (arr, len) => {
//     const base = arr.length;
//     const counter = Array(len).fill(base === 1 ? arr[0] : 0);
//     if (base === 1) return [counter];
//     const combos = [];
//     const increment = i => {
//         if (counter[i] === base - 1) {
//             counter[i] = 0;
//             increment(i - 1);
//         } else {
//             counter[i]++;
//         }
//     }

//     for (let i = base ** len; i--;) {
//         const combo = [];
//         for (let j = 0; j < counter.length; j++) {
//             combo.push(arr[counter[j]]);
//         }
//         combos.push(combo);
//         increment(counter.length - 1);
//     }



//     return combos;
// }

const getCombos = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : [arr];
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
            getCombos([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
            item,
            ...val,
          ])
        ),
      []
    );
  };

exports.getCombos = getCombos;