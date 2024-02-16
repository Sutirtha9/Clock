
var i=1;
        
function TimeDisplay()
{
    const currentDate=new Date();

    var hour = currentDate.getHours();
    var min = currentDate.getMinutes();
    var sec = currentDate.getSeconds();

    if(hour>12)
    {
        hour=hour-12;
    }

    var clockMin=(min*6)-90;
    var clockHour=((hour*30)+min/2)-90;
    var clockSec=(sec*6)-90;

    document.querySelector('#analogHour').style.transform=`rotate(${clockHour}deg)`;
    document.querySelector('#analogMin').style.transform=`rotate(${clockMin}deg)`;
    document.querySelector('#analogSec').style.transform=`rotate(${clockSec}deg)`;

    if(hour<10)
    {
        hour= "0"+hour;
    }
    if(min<10)
    {
        min= "0"+min;
    }
    if(sec<10)
    {
        sec= "0"+sec;
    }
    if(hour == 0)
    {
        hour=12;
    }


    document.querySelector('#hour').innerHTML=hour;
    document.querySelector('#min').innerHTML=min;
    document.querySelector('#sec').innerHTML=sec;

    if(sec%2==0)
    {
        document.querySelector('#colon1').style.visibility='hidden';
        document.querySelector('#colon2').style.visibility='hidden';
    }
    else
    {
        document.querySelector('#colon1').style.visibility='visible';
        document.querySelector('#colon2').style.visibility='visible';
    }
    i++;


    setTimeout(()=>{TimeDisplay()},500);
    
}
TimeDisplay();
