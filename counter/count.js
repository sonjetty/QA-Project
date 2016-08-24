window.onload=function() {
  // Month,Day,Year,Hour,Minute,Second
  upTime('jan,01,2016,00:00:00'); // ****** Change this line!
}
function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  document.getElementById('days').firstChild.nodeValue = days;
  document.getElementById('hours').firstChild.nodeValue = hours;


  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}

var date;
function resetDate() {
date=prompt('Please enter new date in from of jan,01,2016,00:00:00');
console.log(date);

}

function modify_qty(val) {
   
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
    document.cookie = new_qty;
    console.log(keep);

}

$.ajax({
  url: 'https://spreadsheets.google.com/feeds/list/1lj_8j3ViMeTcW838TiDYdnRf4Y8dHgDTKJz5WvpTOaM/1/public/values?alt=json',
  success: function(data){
    console.log(data);
  }
});

var JSONURL = 'https://spreadsheets.google.com/feeds/list/1lj_8j3ViMeTcW838TiDYdnRf4Y8dHgDTKJz5WvpTOaM/1/public/values?alt=json';

function callback(data){
    
    var cells = data.feed.entry;
    console.log(data);
    console.log(cells);
    
    var raw = document.createElement('p');
    raw.innerText = JSON.stringify(cells);
    document.body.appendChild(raw);
}

$(document).ready(function(){
    
    $.ajax({
        url:JSONURL,
        success: function(data){
            callback(data);
        }
    });

});