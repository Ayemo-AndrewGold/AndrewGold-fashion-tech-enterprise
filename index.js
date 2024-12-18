const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtns.classList.toggle('modal-choice-btns-reverse')
})

/*   
Challenge: 
1. Take control of the div holding the buttons.
2. In index.css, set up a selector for a new class
   that uses flex-direction to reverse the order 
   of its child elements.
3. Toggle that class on the div holding the buttons 
   when a user's cursor hovers over the decline button.
*/ 


consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')
    
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to our server...</p>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Confirming if you're spam or not...`
    }, 1500)
    
    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you are not a spam </h2>
        <p>Wecome To AndrewGold's Fashion Tech Enterprise.</p>
        <div class="idiot-gif">
            <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHdndWw3MzQwbGRmMjZzN2w5ZWM5eDI3N211N3VtaHluMnRuMnpkOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XD9o33QG9BoMis7iM4/giphy.webp">
        </div>
    `
    modalCloseBtn.disabled = false
    }, 3000)
  
}) 
