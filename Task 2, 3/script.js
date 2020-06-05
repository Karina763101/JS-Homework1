var term = {
    Belarus: 16,
    Austria: 10,
    Vietnam: 27,
    Georgia: 14,
    Denmark: 10,
    Egypt: 24,
    Kuwait: 36,
    Russia: 12
}

console.log(term);

var value = Object.values(term);
// console.log(value);

function average_term(value){
    var average = 0;
    return average = value.reduce((a,b) => (a+b))/value.length;
};

console.log('Среднее значение температур: ' + average_term(value));

// function getMaxOfArray() {
//     var max = 0;
//     return max = Math.max.apply(null, value);
// };

// console.log('Максимальное значение: ' + getMaxOfArray(value) + ' градусов');


function getMax() {
    var max = 0;
    var country = '';
    for (var key in term){
        if (term[key] > max){
            max = term[key];
            country = key;
        }
    }
    return console.log('Максимальное значение у ' + country + ': ' + max + ' градусов');
};

getMax(term);