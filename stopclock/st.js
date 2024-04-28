let inp=document.querySelector(".stop-clock");
let a=0;
let b=0;
let c=1;
let intervalid;

function startTimer()
{
    
    if(c==60)
    {
        c=0;
        b++;
    }
    else if(b==60)
    {
        b=0;
        a++;
    }
    
        inp.innerText=`${a} : ${b} : ${c}`;
        c++;
    
}
function startT()
{
    intervalid=setInterval(startTimer,1000);
}
function stopT()
{
    clearInterval(intervalid);
}
function restartT()
{
    a = 0;
    b = 0;
    c = 0;
}