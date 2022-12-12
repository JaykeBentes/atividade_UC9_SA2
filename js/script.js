$(document).ready(function(){

    $("#mobile").click(function(){
        if($("#nav1").hasClass("active")){
            $("#nav1").removeClass("active")
        }else {
            $("#nav1").addClass("active")
            }
    })
    
})


//btn hamburguer 
const hamburguer = document.getElementById('hamburguer')
hamburguer.addEventListener('click', animacao)
function animacao() {
    hamburguer.classList.toggle('active')
}


//login e signup
const switchers = [...document.querySelectorAll('.btn-lg')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


