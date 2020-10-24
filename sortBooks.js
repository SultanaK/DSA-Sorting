const { merge } = require('./merge')
function sortBooks(array) {
    if (array.length <= 1) {
        return array
    }
    const middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle, array.length)

    left = sortBooks(left)
    right = sortBooks(right)
    return merge(left, right,array)
}
const books = [
    'Freakonomics',
    'Medical Medium',
    'Introvert Power',
    'Drinking Closer To Home',
    'The Good Girl',
    'Gone Girl',
    'Hollow City',
    'Amelia',
    'Water For Elephants',
    'Hold Still'
];

console.log(sortBooks(books))