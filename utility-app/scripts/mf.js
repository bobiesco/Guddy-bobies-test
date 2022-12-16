document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.showbutton');
    const subcriptionBox = document.querySelector(".purchase-collapse");

    const button2 = document.querySelector('.li-fund');
    const subcriptionBox2 = document.querySelector(".fund-collapse");

    const button3 = document.querySelector('.avatar');
    const subcriptionBox3 = document.querySelector(".holla-collapse");

    button.addEventListener('click', function(e){
        e.preventDefault();
        subcriptionBox.classList.toggle('hide')

    })

    button2.addEventListener('click', function(e){
        e.preventDefault();
        subcriptionBox2.classList.toggle('hide2')

    })

    button3.addEventListener('click', function(e){
        e.preventDefault();
        subcriptionBox3.classList.toggle('hide3')

    })

} )
