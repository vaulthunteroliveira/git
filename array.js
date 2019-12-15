let inputField = document.querySelector('#inputField');
let outputValue = document.querySelector('#outputValue');
let btn = document.querySelector('button');

let items = [
    {'oldValue': 6985, 'newValue': 1},
    {'oldValue': 6967, 'newValue': 2},
    {'oldValue': 6966, 'newValue': 4},
    {'oldValue': 6977, 'newValue': 5},
    {'oldValue': 6973, 'newValue': 6},
    {'oldValue': 6978, 'newValue': 7},
    {'oldValue': 6979, 'newValue': 8},
    {'oldValue': 6974, 'newValue': 9},
    {'oldValue': 6972, 'newValue': 10},
    {'oldValue': 6968, 'newValue': 11},
    {'oldValue': 968, 'newValue': 14},
    {'oldValue': 6986, 'newValue': 15},
    {'oldValue': 6979, 'newValue': 16},
    {'oldValue': 6976, 'newValue': 17},
    {'oldValue': 6975, 'newValue': 18},
    {'oldValue': 6987, 'newValue': 19},
    {'oldValue': 6970, 'newValue': 20}, 
    {'oldValue': 408, 'newValue': 25}, 
    {'oldValue': 345, 'newValue': 26}, 
    {'oldValue': 385, 'newValue': 27}, 
    {'oldValue': 6997, 'newValue': 35}, 
    {'oldValue': 723, 'newValue': 38}, 
];



function myFunction(){
    for(let item of items){
        if(item.oldValue == inputField.value){
            let stringResponse = item.newValue;
            outputValue.innerHTML = stringResponse;
         }
     }
}