let submitBtn=document.querySelector('.submit');
let container1=document.querySelector('.container2');
let container2=document.querySelector('.thankdiv');
let buttons=document.querySelectorAll('.select');
let feedback=document.querySelector('.feedback')
let score=0;

submitBtn.addEventListener('click',onsubmit);
buttons.forEach(btn=>{
    btn.addEventListener('click',selectButton)
})

function selectButton(event){
    buttons.forEach(btn=>{
        btn.classList.remove('active')
    })
    if(event.target.classList.contains('select')){
        event.target.classList.add('active')
    }else{event.target.parentElement.classList.add('active')}
    score=event.target.textContent;
    console.log(score)
}


function onsubmit(){
    container1.classList.add('hide');
    feedback.textContent=score;
    container2.classList.add('add')
}

