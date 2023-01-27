function show(){
    document.querySelector('.ham').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}
document.addEventListener('DOMContentLoaded', function() {
    console.log(document.getElementById('box1').getBoundingClientRect());
   
}, false);


