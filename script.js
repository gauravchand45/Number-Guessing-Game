// let but=document.querySelector('#but')
// let msg=document.querySelector('#msg')
// let one=document.querySelector('#one')
// let two1=document.querySelector('#two1')
// let r=Math.floor((Math.random()*100+1))
// console.log(r)
// but.addEventListener('click',()=>{
//     const arr=[]
//     let input=document.querySelector('input').value
//     console.log(input);
//     if(input<1 || input>100 ){
//         msg.innerHTML=`Enter a valid number`
//     }
//     else if(r==input){
//         msg.style.color="green"
//         msg.innerHTML=`You guessed right ${input}`
//     }
//     else if(r<input){
//         msg.innerHTML=`wrong guess, number is smaller than guessed`
//         msg.style.color="red"
        
//         arr.push(input)
//     }
//     else{
//         msg.innerHTML=`wrong guess, number is greater than guessed`
//         msg.style.color="red"
//         arr.push(input)
//     }
        
        
//         if(two1.innerHTML==0){
//             msg.style.color="red"
//             msg.innerHTML=`your guesses finished`
            
//         }
//         else{
//             one.innerHTML+=`${arr},`
//             two1.innerHTML-=arr.length
//         }
//     })


let randomNumber=Math.floor((Math.random()*100+1))
let one=document.querySelector('#one')
let two1=document.querySelector('#two1')
let startAgain=document.querySelector('#startAgain')
let val=(document.querySelector('input'))
// console.log(randomNumber);
let msg=document.querySelector('#msg')
const form=document.querySelector('form')
startOver()

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        let input=parseInt(document.querySelector('input').value)
        
        checkVal(input)
    })

    
    function checkVal(guess){
        // console.log("hi");
        if(guess<1 || guess>100 || isNaN(guess)){
            msg.style.color="red"
            msg.innerHTML=`Enter a valid number`
        }
        else{
            checkNumberOfGuess(guess)
        }
    }
    
    function guessValue(guess){
        if(guess===randomNumber){
            // console.log("hi");
            msg.innerHTML=`You guessed right ${guess}`
            msg.style.color="green"
            startAgain.innerHTML=' CLick to RESTART'
            
        }
        else{
            msg.style.color="red"
            if(guess<randomNumber){
                msg.innerHTML=`wrong guess, number is greater than guessed`
            }
            else{
                msg.innerHTML=`wrong guess, number is smaller than guessed`
            }
        }  
    }
    
    function checkNumberOfGuess(guess){
        if(two1.innerHTML==0){
            msg.innerHTML=`Guesses finished, Game over`
            msg.style.color="red"
            startAgain.innerHTML=' CLick to RESTART'
            
        }
        else{
            const prevGuess=[]
            prevGuess.push(guess);
            one.innerHTML+=`${prevGuess},`
            two1.innerHTML-=prevGuess.length
            val.value=""
            guessValue(guess)
        }
     
    }
// }


function startOver(){
    startAgain.addEventListener('click',()=>{
        let randomNumber=Math.floor((Math.random()*100+1))
        startAgain.innerHTML=""
        msg.innerHTML=""
        val.value=""
        one.innerHTML=`Previous Guesses:`
        two1.innerHTML=10
    })
}