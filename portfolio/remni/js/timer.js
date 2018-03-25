var timeend= new Date();
// IE и FF по разному отрабатывают getYear()
timeend = new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(2016, 6, 7);
// Для задания даты с точностью до времени укажите дату в формате: (ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ, МИНУТЫ)      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// timeend= new Date(2016, 6, 4, 10, 11);
timeend= new Date(2018, 6, 8, 19, 00);

function time() {
var today = new Date();
today = Math.floor((timeend-today)/1000);
var tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
var tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
var thour=today%24; today=Math.floor(today/24);
var timestr=today +""+ thour+""+tmin+""+tsec+" ";
document.getElementById('today').innerHTML=today;
document.getElementById('thour').innerHTML=thour;
document.getElementById('tmin').innerHTML=tmin;
document.getElementById('tsec').innerHTML=tsec;
window.setTimeout("time()",1000);
}





// var eventDay = 07;
//     var eventMonth = 07;
//     var eventYear = 2016;   
//     var deadline = new Date(eventYear,eventMonth-1,eventDay);
//     $('#cd1').countdown({until: deadline, format: 'DHMS', timeSeparator: ':', description: '',});
//     //$('#cd2').countdown({until: deadline, format: 'DHMS', timeSeparator: ':', description: '',});