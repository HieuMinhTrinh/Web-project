const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')
const addressclosebutton = document.querySelector('#address-close-button')
console.log(addressclose)
addressbtn.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "flex"
})
addressclose.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "none"
})
addressclosebutton.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "none"
})

