const startMin=10;
let time=startMin*60; //600sec

const countdown=document.getElementById('ct');

setInterval(updatect,1000);

//this function so that we have ct to run every sec
function updatect(){
    //calc mins and sec remaining
    const min=Math.floor(time/60);
    let sec = time%60;

    sec=sec<10?'0'+sec:sec;

    countdown.innerHTML=`${min}:${sec}`;
    time--;


}