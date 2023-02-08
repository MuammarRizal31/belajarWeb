var jangs = true;
while (jangs) {
  var comp = Math.random();
  console.log(comp);
  var p = prompt("Pilih : (gajah,orang,semut)");

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.32 && comp <= 0.63) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  var hasil = "";
  if (p == comp) {
    hasil = "seri";
  } else if (p == "gajah") {
    if (comp == "orang") {
      hasil = "menang";
    } else {
      hasil = "kalah";
    }
  } else if (p == "orang") {
    if (comp == "gajah") {
      hasil = "kalah";
    } else {
      hasil = "menang";
    }
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "kata yang anda masukan salah";
  }

  alert("kata yang anda masukan adalah : " + p + " dan komputer adalah : " + comp + " maka hasilnya anda : " + hasil);
  jangs = confirm("Bermain lagi ?");
}

var jangs = 8;
var nge = 3;
console.log(jangs * nge);
