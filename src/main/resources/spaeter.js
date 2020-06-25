
var counter = 50;
var f = function f() {
  function seconds_since_epoch(d){  
    return Math.floor( d / 1000 );  
  }

  var date = new Date(),
    // now = date.getTime(),
    year = date.getFullYear(),
    month = date.getMonth() + 1, // months are zero indexed
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    fmt = day + "." + month + "." + year + " " + hour + ":" + minute + ":" + second,
    sec = seconds_since_epoch(date.getTime());

  $('#content').append(fmt);
  $('#content').append('<br/>');

  $('#content').append(sec);
  $('#content').append('<br/>');

  $('#content').append('<img src="http://gemedet.de/GC/GC1XK21/bild.php?rnd='+Math.random()+'" width="240" height="40" /></p>');
  $('#content').append("<hr/>");

  if (counter-- > 0) {
    setTimeout(f, 900);
  }
};

f();