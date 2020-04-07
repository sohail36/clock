setInterval(updateTime,1000);
updateTime();
function updateTime(){
    var audio=new Audio('clock.mp3');
    audio.src="clock.mp3";
    var min=document.querySelector('.minute_hand');
    var sec=document.querySelector('.second_hand');
    var hor=document.querySelector('.hour_hand');
    var new_data=new Date();
    var seconds=(new_data.getSeconds()/60)*360;
    var minutes=(new_data.getMinutes()/60)*360;
    var hour=(new_data.getHours()/12)*360+(minutes/6)*0.5;
    sec.style.setProperty("--angle",seconds+"deg");
    min.style.setProperty("--angle",minutes+"deg");
    hor.style.setProperty("--angle",hour+"deg");
    
    if(new_data.getHours()>12)
    document.querySelector(".digital .hour").innerText=new_data.getHours()-12;
    else if(new_data.getHours()==0)
    document.querySelector(".digital .hour").innerText=12;
    else
    document.querySelector(".digital .hour").innerText=new_data.getHours();
    document.querySelector(".digital .minute").innerText=new_data.getMinutes();
    document.querySelector(".digital .second").innerText=new_data.getSeconds();
    setdate(new_data.getDay());
    
}
function setdate(ele){
    var day=document.querySelector('.day');
    if(ele==0)
    day.innerText="Sunday";
    else if(ele=='1')
    day.innerText="Monday";
    else if(ele==2)
    day.innerText="Tuesday";
    else if(ele==3)
    day.innerText="Wednesday";
    else if(ele==4)
    day.innerText="Thursday";
    else if(ele==5)
    day.innerText="Friday";
    else
    day.innerText="Saturday";
}






