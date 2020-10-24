function shuffleData(array, counter = 0) {
    
    while (counter < array.length) {
        let randomIndex = Math.floor(Math.random() * array.length)
         let j = randomIndex
        for (let i = 0; i < array.length; i++){
            for (j = 0; j < array.length; j++){
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                counter++
                 return shuffleData(array,counter) 
            }
        }
    }
   return array 
}

console.log(shuffleData([1,2,3,4,5]))