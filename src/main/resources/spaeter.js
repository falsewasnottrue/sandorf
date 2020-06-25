var seconds_since_epoch = function(d){  
  return Math.floor( d / 1000 );  
}

var toBase36 = function(v) {
  // FIXME skalieren
  var x = (v - 25 - 36*7 - 36*36*25 - 36*36*36*5 - 36*36*36*36*32 + 36*36*36*36*36*29) % (36*36*36*36*36*36-1);
  var str = x.toString(36);
  var split = str.split("");
  var stellen = split.map(s => parseInt(s, 36));

  return stellen;
}

var showSymbols = function(v) {
  var stellen = toBase36(v);

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


var counter = 3;
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

  showSymbols(sec);
  $('#content').append("<hr/>");

  if (counter-- > 0) {
    setTimeout(f, 900);
  }
};

// f();

var dates = [
"25.06.2018 13:17:42",
"15.01.2009 11:19:33",
"15.05.2043 03:41:18",
"13.09.2030 09:21:30",
"21.01.2028 12:14:06",
"07.09.2014 04:11:37",
"25.05.2020 14:55:41",
"30.09.2013 03:52:58",
"01.10.2010 13:57:14",
"09.06.1989 01:23:09",
"08.05.2026 17:16:42",
"20.06.2041 11:27:59",
"25.07.2032 12:28:25",
"01.03.2053 03:22:54",
"03.06.1985 08:36:57",
"22.10.2020 21:04:05",
"10.03.2013 00:54:24",
"30.04.2040 20:24:46",
"28.09.2029 11:04:42",
"22.11.2012 06:03:13",
"12.11.2043 11:12:50",
"09.11.2020 04:28:36",
"21.04.2022 08:42:24",
"23.05.2030 03:43:53",
"19.06.1989 17:48:50",
"15.02.2038 08:24:39",
"01.05.1987 02:08:37",
"01.09.2011 21:17:54",
"26.11.2029 12:24:46",
"02.05.2040 13:49:47",
"21.05.2020 22:19:36",
"29.07.2037 11:16:05",
"20.03.2013 21:30:21",
"29.05.2013 02:36:52"
];

var isoDates = [
"2018-06-25 13:17:42",
"2009-01-15 11:19:33",
"2043-05-15 03:41:18",
"2030-09-13 09:21:30",
"2028-01-21 12:14:06",
"2014-09-07 04:11:37",
"2020-05-25 14:55:41",
"2013-09-30 03:52:58",
"2010-10-01 13:57:14",
"1989-06-09 01:23:09",
"2026-05-08 17:16:42",
"2041-06-20 11:27:59",
"2032-07-25 12:28:25",
"2053-03-01 03:22:54",
"1985-06-03 08:36:57",
"2020-10-22 21:04:05",
"2013-03-10 00:54:24",
"2040-04-30 20:24:46",
"2029-09-28 11:04:42",
"2012-11-22 06:03:13",
"2043-11-12 11:12:50",
"2020-11-09 04:28:36",
"2022-04-21 08:42:24",
"2030-05-23 03:43:53",
"1989-06-19 17:48:50",
"2038-02-15 08:24:39",
"1987-05-01 02:08:37",
"2011-09-01 21:17:54",
"2029-11-26 12:24:46",
"2040-05-02 13:49:47",
"2020-05-21 22:19:36",
"2037-07-29 11:16:05",
"2013-03-20 21:30:21",
"2013-05-29 02:36:52"
];

var date2Sec = function(d) {
  var date = Date.parse(d);
  var sec = seconds_since_epoch(date);
  return sec;
}

var showDates = function() {
  for (j=0; j<34; j++) {
    var date = isoDates[j];
    var sec = date2Sec(date);
    showSymbols(sec);
  } 
}

// showDates();