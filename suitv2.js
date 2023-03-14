let gameEnded = false;

const placeholder = document.getElementById('placeholder');
const batu = document.getElementById('batu');
const gunting = document.getElementById('gunting');
const kertas = document.getElementById('kertas');
const hasil = document.querySelector('.hasil h3');


// generate computer choise
let pilihanKomputer = Math.round(Math.random() * 2);
let komputer = '';
if(pilihanKomputer == 0){
    komputer = 'kertas';
}else if(pilihanKomputer == 1){
    komputer = 'gunting';
}else if(pilihanKomputer == 2){
    komputer = 'batu';
}


function menang(){
    const statusMenang = document.createTextNode('MENANG');
    hasil.appendChild(statusMenang);
    hasil.classList.add('text-success');
}
function kalah(){
    const statusKalah = document.createTextNode('KALAH');    
    hasil.appendChild(statusKalah);
    hasil.classList.add('text-danger');
}
function draw(){
    const statusDraw = document.createTextNode('DRAW');  
    hasil.appendChild(statusDraw);
    hasil.classList.add('text-secondary');  
}


batu.addEventListener('click',function(){
    batu.classList.add('selected');
    placeholder.setAttribute('src',komputer+'.png');
    placeholder.classList.add('bg-warning');   

    if (komputer == 'kertas') {
           kalah();
    } else if(komputer == 'gunting') {
           menang();
    } else if(komputer == 'batu'){
          draw();
    }   
});

gunting.addEventListener('click',function(){
    gunting.classList.add('selected');
    placeholder.setAttribute('src',komputer+'.png');
    placeholder.classList.add('bg-warning');   

    if (komputer == 'kertas') {
           menang();
    } else if(komputer == 'gunting') {
           draw();
    } else if(komputer == 'batu'){
          kalah();
    }   
});

kertas.addEventListener('click',function(){
    kertas.classList.add('selected');
    placeholder.setAttribute('src',komputer+'.png');
    placeholder.classList.add('bg-warning');   

    if (komputer == 'kertas') {
           draw();
    } else if(komputer == 'gunting') {
           kalah();
    } else if(komputer == 'batu'){
          menang();
    }   
});


const btnRestart = document.createElement('button');
const btnRestartText = document.createTextNode('Restart');
btnRestart.appendChild(btnRestartText);
btnRestart.setAttribute('type','button');
btnRestart.classList.add('btn');
btnRestart.classList.add('btn-danger');

const boxBtn = document.querySelector('.box-btn');
boxBtn.appendChild(btnRestart);

const tombolRestart = document.querySelector('.box-btn button');
tombolRestart.addEventListener('click',function(){
    location.reload();
});