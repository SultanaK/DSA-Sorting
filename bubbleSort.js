function bubbleSort(array){ 
const newArray = array.slice()
    for (let i = 0; i < newArray.length - 1; i++){
        for (let j = 0; j < newArray.length - 1 - i; j++) {
            if (newArray[j] > newArray[j + 1]) {
                /*  let temp = newArray[j]
                 newArray[j] = newArray[J + 1]
                 newArray[j+1] = temp
             } */
                [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]]
            }
        }
    }
   return newArray 
}