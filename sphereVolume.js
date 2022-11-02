let diameter= document.getElementById('diam')
let calc= document.getElementById('math')
let answerBoxSph=document.getElementById('answerboxSph')
let answerBoxCirc=document.getElementById('answerboxCirc')
let answerBoxCircum=document.getElementById('answerboxCircum')

let cubicVol=function() {
    let answr= ((4*3.14)/3) * (diameter.value/2)**3
    answr=answr.toPrecision(3)
    answerBoxSph.innerHTML=answr

}
let circleArea=function(){
    let answr2= (diameter.value/2)**2 * 3.14
    answr2=answr2.toPrecision(3)
    answerBoxCirc.innerHTML=answr2
}

let circleCircum=function(){
    let answr3=(diameter.value/2) * (2 * 3.14)
    answr3=answr3.toPrecision(3)
    answerBoxCircum.innerHTML=answr3
}

calc.addEventListener('click', () => {
    cubicVol();
    circleArea();
    circleCircum();
})

let fn=document.getElementById('first')
let ln=document.getElementById('secondName')
let str=document.getElementById('street')
let cty=document.getElementById('city')
let stt=document.getElementById('state')
let zip=document.getElementById('zip')
let phon=document.getElementById('phone')
let mail=document.getElementById('email')
let int=document.getElementById('interests')
let subm=document.getElementById('entr')
let cardInfo=document.getElementById('interestCard')

let makeRollodex=function(){
    cardInfo.innerHTML= `Name: ${fn.value} ${ln.value} Address: ${str.value} ${cty.value}
    ${stt.value} ${zip.value} Phone: ${phon.value} Email: ${mail.value} Interests: ${int.value}`
   
}

subm.addEventListener('click',makeRollodex)