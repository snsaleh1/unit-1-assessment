var sum =0;
var displayEl=document.querySelector('.sumDifference');
var inputEl=document.getElementById('input');

document.getElementById('plus').addEventListener('click', function(){
    sum+= parseFloat(inputEl.value);
    render();
})

document.getElementById('minus').addEventListener('click', function(){
    sum-= parseFloat(inputEl.value);
    render();
})

function init() {
    sum;
    render();
}

function render() {
    displayEl.innerHTML = (sum);
}

document.addEventListener('hover', function(button){
    event.target.style.color= 'gray';
});