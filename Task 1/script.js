function new_page(){
    window.location = 'https://www.onliner.by/';
};

var elem = document.getElementById('btn');
var elem1 = document.getElementById('btn1');
var elem2 = document.getElementById('btn2');
var elem3 = document.getElementById('btn3');
// function new_style(){
//     if(document.body.style.backgroundColor === 'white'){
//         document.body.style.backgroundColor = 'green';
//     } else{
//         document.body.style.backgroundColor = 'white';
//     }
// };

function new_style(){
    elem.classList.toggle('btn1');
    elem1.classList.toggle('press');
    elem2.classList.toggle('press');
    elem3.classList.toggle('press');
};

var cont = document.getElementById('fl');

function new_content(){
    if(cont.style.display === 'block'){
        cont.style.display = 'none';
    } else {
        cont.style.display = 'block';
    }
    
}