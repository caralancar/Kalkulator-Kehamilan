function calc()
{
var day = document.first.len11.value;
var mon = document.first.len12.value;
var year = document.first.len13.value;
var ylen = year.length;
var d = new Array("AHAD", "SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU");
var m = new Array("JANUARI", "FEBRUARI", "MAREY", "APRIL", "MEI", "JUNI", "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER",
"DESEMBER");
var curd = new Date(year,mon-1,day);
var res2 = curd.getMonth();
var res = new Date();
var diff =
Date.UTC(res.getFullYear(),res.getMonth()-1,res.getDay(),0,0,0)
- Date.UTC(curd.getFullYear(),curd.getMonth()-1,curd.getDay(),0,0,0);
var secleft = diff/1000/60;
var hrsleft = secleft/60;
var daysleft = hrsleft/24;
//if(res2 == (mon-1) && daysleft < 300 && year!="")
if (year!="" && ylen>3)
{
var fd1 = new Date(year, mon-1, parseInt(day)+10);
document.first.fd1.value = d[fd1.getDay()]+", "+m[fd1.getMonth()]+" "+fd1.getDate()+", "+fd1.getFullYear();
var fd2 = new Date(year, mon-1, parseInt(day)+20);
document.first.fd2.value = d[fd2.getDay()]+", "+m[fd2.getMonth()]+" "+fd2.getDate()+", "+fd2.getFullYear();
var cd = new Date(year, mon-1, parseInt(day)+14);
document.first.cd.value = d[cd.getDay()]+", "+m[cd.getMonth()]+" "+cd.getDate()+", "+cd.getFullYear();
var fte = new Date(year, mon-1, parseInt(day)+84);
document.first.fte.value = d[fte.getDay()]+", "+m[fte.getMonth()]+" "+fte.getDate()+", "+fte.getFullYear();
var ste = new Date(year, mon-1, parseInt(day)+189);
document.first.ste.value = d[ste.getDay()]+", "+m[ste.getMonth()]+" "+ste.getDate()+", "+ste.getFullYear();
var dd = new Date(year, mon-1, parseInt(day)+280);
document.first.dd.value = d[dd.getDay()]+", "+m[dd.getMonth()]+" "+dd.getDate()+", "+dd.getFullYear();
}
else{
alert("Invalid Date");
}
}
function isNumber(evt) {evt = (evt) ? evt : window.event;var charCode = (evt.which) ? evt.which : evt.keyCode;if (charCode > 31 && (charCode < 48 || charCode > 57)) {return false;}return true;
}
function chk(){
var sds = document.getElementById('dum');
if(sds == null){alert("You are using a free package.\n You are not allowed to remove the tag.\n");
document.getElementById("tab").style.visibility="";
}
var sdss = document.getElementById("dumdiv");
if(sdss == null){alert("You are using a free package.\n You are not allowed to remove the tag.\n");}
}
window.onload=chk;