let counter = document.querySelector('h1');
let count=120;

let start=document.querySelector('.start');

  setInterval(()=>{
    counter.innerText = count;
    count--
    if(count<0){
        // clearInterval(aisehi);
        alert("oops! time completed");
        location.replace("index.html");
    }
},500)

document.addEventListener('DOMContentLoaded', function() {
    let submit=document.querySelector('.submit');
                
                    submit.addEventListener('click',function(){
                        this.style.backgroundColor="gray";
                        check();
                    });
                });
                
                
    function check(){
        let correctanswer={
            q1:"JavaScript is an Object-Based language",
            q2:"22",
            q3:"All",
            q4:"Function/Method",
            q5:"const",
        };
        let score=0;
        for(let i in correctanswer){
            let useranswer=document.querySelector(`input[name="${i}"]:checked`);
            if(useranswer){
                if(useranswer.value===correctanswer[i]){
        
                   score++;
                }
            }
        }
        if(score>=2){
           document.getElementById(`result`).style.color="green";
           document.getElementById(`result`).innerText=`Your score is ${score} out of 5`;    
        }
        else{
           document.getElementById(`result`).style.color="red";
           document.getElementById(`result`).innerText=`Your score is ${score} out of 5`;    


        }
    }