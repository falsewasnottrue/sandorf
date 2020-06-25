var seconds_since_epoch = function(d){  
  return Math.floor( d / 1000 );  
}

var toBase36 = function(v, i) {
  // FIXME skalieren
  var x = (v - 23 - 36*7 - 36*36*25 - 36*36*36*5 - 36*36*36*36*32 + 36*36*36*36*36*29) % (36*36*36*36*36*36-1);
  var str = x.toString(36);
  var split = str.split("");
  var stellen = split.map(s => parseInt(s, 36));

  return stellen;
}

var showSymbols = function(v) {
  // for (i = 0; i<36; i++) {
    showSymbolsInner(v,0);
  // }
}

var showSymbolsInner = function(v,i) {
  var stellen = toBase36(v, i);

  $('#content').append(i);
  $('#content').append('<br/>');

  for (i = 0; i<6; i++) {
    $('#content').append('<img src="images/'+stellen[i]+'.png"></img>');
  }
  $('#content').append('<br/>');
}

var currentSymbol = function() {
  var date = new Date(),
    sec = seconds_since_epoch(date.getTime());

  $('#content').append(sec);
  $('#content').append('<br/>');

  $('#content').append('<img src="http://gemedet.de/GC/GC1XK21/bild.php?rnd='+Math.random()+'" width="240" height="40" /></img>');
  $('#content').append('<br/>');

  showSymbols(sec);

  $('#content').append("<hr/>");

}


var counter = 50;
var f = function() {
  

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

  $('#content').append('<img src="http://gemedet.de/GC/GC1XK21/bild.php?rnd='+Math.random()+'" width="240" height="40" /></img>');
  $('#content').append("<hr/>");

  if (counter-- > 0) {
    setTimeout(f, 900);
  }
};

// f();