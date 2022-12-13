document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.showbutton');
    const subcriptionBox = document.querySelector(".purchase-collapse");

    button.addEventListener('click', function(e){
        e.preventDefault();
        subcriptionBox.classList.toggle('hide')

    })

} )
