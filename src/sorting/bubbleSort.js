/**
 * Escribe una función que reciba un array de `integers` como input y retorne
 * una versión ordenada de manor a menor de este usando el algoritmo `bubble
 * sort` para hacerlo.
 */
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let somethingWasSwapped = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      const current = array[j];
      const next = array[j + 1];
      if (next < current) {
        swap(array, j);
        somethingWasSwapped = true;
      }
    }
    if (!somethingWasSwapped) break;
  }
  return array;
}

const swap = (array, idx) => {
  [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
}

export default bubbleSort;
