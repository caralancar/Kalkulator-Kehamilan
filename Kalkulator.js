<script charset="utf-8" language="JavaScript1.2" type="text/javascript">
function isValidDate(dateStr) {
var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
var matchArray = dateStr.match(datePat);
if (matchArray == null) {
alert("Format tanggal salah.")
return false;
}
month = matchArray[1];
day = matchArray[3];
year = matchArray[4];
if (month < 1 || month > 12) {
alert("Bulan harus antara 1 dan 12.");
return false;
}
if (day < 1 || day > 31) {
alert("Tanggal harus antara 1 dan 31.");
return false;
}
if ((month==4 || month==6 || month==9 || month==11) && day==31) {
alert("Bulan "+month+" tidak sampai 31 hari!")
return false;
}
if (month == 2) {
var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
if (day>29 || (day==29 && !isleap)) {
alert("Februari " + year + " tidak sampai " + day + " hari!");
return false;
   }
}
return true;
}
function dispDate(dateObj) {
month = dateObj.getMonth()+1;
month = (month < 10) ? "0" + month : month;
day   = dateObj.getDate();
day = (day < 10) ? "0" + day : day;
year  = dateObj.getYear();
if (year < 2000) year += 1900;
return (day + " - " + month + " - " + year);
}
function pregnancyCalc(pregform) {
menstrual = new Date();
ovulation = new Date();
duedate = new Date();
tri1 = new Date();
tri2 = new Date();
tri3 = new Date();
siap = new Date();
lebih = new Date();
today = new Date();
cycle = 0; 
menstruasi = pregform.bulan.value + "/" + pregform.tanggal.value + "/" + pregform.tahun.value
if (isValidDate(menstruasi)) {
menstrualinput = new Date(menstruasi);
menstrual.setTime(menstrualinput.getTime())
}
else return false;
cycle = (pregform.cycle.value == "" ? 28 : pregform.cycle.value);
if (pregform.cycle.value != "" && (pregform.cycle.value < 22 || pregform.cycle.value > 45)) {
alert("Masukan rata-rata Siklus haid dengan benar.");
}
ovulation.setTime(menstrual.getTime() + (cycle*86400000) - (14*86400000));
pregform.conception.value = dispDate(ovulation);
duedate.setTime(ovulation.getTime() + 266*86400000);
pregform.duedate.value = dispDate(duedate);

tri1.setTime(menstrual.getTime());
pregform.tri1.value = dispDate(tri1);

tri2.setTime(ovulation.getTime() + 70*86400000);
pregform.tri2.value = dispDate(tri2);
 
tri3.setTime(ovulation.getTime() + 175*86400000);
pregform.tri3.value = dispDate(tri3);

siap.setTime(ovulation.getTime() + 226*86400000);
pregform.siap.value = dispDate(siap);

lebih.setTime(ovulation.getTime() + 280*86400000);
pregform.lebih.value = dispDate(lebih);

var fetalage = 281 - ((duedate - today) / 86400000);
weeks = parseInt(fetalage / 7); 
days = Math.floor(fetalage % 7);
fetalage = weeks + " minggu" + " " + days + " hari";
pregform.fetalage.value = fetalage;
return false;
}

function dispDate(dateObj) 
{
var month = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
return("" + dateObj.getDate() + " " + month[dateObj.getMonth()] + " " + dateObj.getFullYear());	
}
</script>

<form onsubmit="return pregnancyCalc(this);"><center><table class="tabel"><tbody>
<tr>
   <td>Tanggal / Hari Pertama Haid Terakhir (HPHT)</td>
   <td>
<select id='tanggal'>
              <option value=1>1
              <option value=2>2
              <option value=3>3
              <option value=4>4
              <option value=5>5
              <option value=6>6
              <option value=7>7
              <option value=8>8
              <option value=9>9
              <option value=10>10
              <option value=11>11
              <option value=12>12
              <option value=13>13
              <option value=14>14
              <option value=15>15
              <option value=16>16
              <option value=17>17
              <option value=18>18
              <option value=19>19
              <option value=20>20
              <option value=21>21
              <option value=22>22
              <option value=23>23
              <option value=24>24
              <option value=25>25
              <option value=26>26
              <option value=27>27
              <option value=28>28
              <option value=29>29
              <option value=30>30
              <option value=31>31
          </select>
<select id='bulan'>
              <option value=1>Januari
              <option value=2>Februari
              <option value=3>Maret
              <option value=4>April
              <option value=5>Mei
              <option value=6>Juni
              <option value=7>Juli
              <option value=8>Agustus
              <option value=9>September
              <option value=10>Oktober
              <option value=11>November
              <option value=12>Desember
          </select>
           
<select id='tahun'>
              <option value=2013>2013
              <option value=2014>2014
              <option value=2015>2015
              <option value=2016>2016
              <option value=2017>2017
              <option value=2018>2018
              <option value=2019 selected>2019
              <option value=2020>2020
              <option value=2021>2021
              <option value=2022>2022
          </select>
   </td>
</tr>
<tr>  <td>Rata-rata siklus haid Anda</td>  <td><input maxlength="2" name="cycle" size="2" type="text" value="28" /> hari </td> </tr>
<tr>  <td colspan="2"><div class="tombol" align="center"><input type="submit" value="Hitung" />  </div></td> </tr>
</table>
</div>
