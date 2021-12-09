const merge = (array) => {
  if (array[3] === array[2]) {
    array[3] = array[3] + array[2]

    if (array[1] === array[0]) {
      array[2] = array[0] + array[1]
      array[1] = 0
    } else {
      array[2] = array[1]
      array[1] = array[0]
    }
    array[0] = 0
  } else {
    if (array[2] === array[1]) {
      array[2] = array[1] + array[2]
      array[1] = array[0]
      array[0] = 0
    } else {
      if (array[0] === array[1]) {
        array[1] = array[1] + array[0]
        array[0] = 0
      }
    }
  }

  return array;
}

export const arrowUp = (data) => {
  let newGrid = []

  for (let i = 0; i < 4; i++) {
    let array = [data[i], data[i + 4], data[i + 8], data[i + 12]].filter(
      (num) => num,
    )
    let missing = new Array(4 - array.length).fill(0)
    array = array.concat(missing)
    array = array.reverse();
    array = merge(array);
    
    
    array = array.reverse()
    newGrid[i] = array[0]
    newGrid[i + 4] = array[1]
    newGrid[i + 8] = array[2]
    newGrid[i + 12] = array[3]
  }

  return newGrid
}

export const arrowDown = (data) => {
  let newGrid = []

  for (let i = 0; i < 4; i++) {
    let array = [data[i], data[i + 4], data[i + 8], data[i + 12]].filter(
      (num) => num,
    )
    let missing = new Array(4 - array.length).fill(0)
    array = missing.concat(array)
    

    array = merge(array);

    newGrid[i] = array[0]
    newGrid[i + 4] = array[1]
    newGrid[i + 8] = array[2]
    newGrid[i + 12] = array[3]
  }

  return newGrid
}

export const arrowRight = (data) => {
  let newGrid = []

  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) {
      let array = [data[i], data[i + 1], data[i + 2], data[i + 3]].filter(
        (num) => num,
      )
      let missing = new Array(4 - array.length).fill(0)
      array = missing.concat(array);
      array = merge(array);
      
      newGrid[i] = array[0]
      newGrid[i + 1] = array[1]
      newGrid[i + 2] = array[2]
      newGrid[i + 3] = array[3]
    }
  }

  

  return newGrid
}

export const arrowLeft = (data) => {
  let newGrid = data

  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) {
      let array = [data[i], data[i + 1], data[i + 2], data[i + 3]].filter(
        (num) => num,
      )
      let missing = new Array(4 - array.length).fill(0)
      array = array.concat(missing)
      array = array.reverse()

      // for (let j = 0; j < 4; j++) {
      //   if (array[j] === array[j + 1]) {
      //     array[j] = array[j] + array[j + 1]
      //     if (j + 2 > 3) {
      //       break
      //     } else array[j + 1] = array[j + 2]
      //   }
      // }

      array = merge(array);
      array = array.reverse()
      
      newGrid[i] = array[0]
      newGrid[i + 1] = array[1]
      newGrid[i + 2] = array[2]
      newGrid[i + 3] = array[3]
    }
  }

  return newGrid
}
