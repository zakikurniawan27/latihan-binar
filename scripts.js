// belajar var
var diskon,nama;
nama = "aku";
nama = "siapa?"
diskon = 500;
if(diskon == true){
    diskon = 300;
}
console.log(nama);
console.log(diskon); //outputnya 500 karena variabel diskon bersifat global

function scopeDiskon(){
    var diskon = 300;
    console.log(diskon)// outputnya 300 karena variabel diskon bersifat lokal
}
scopeDiskon()
// end belajar var
// button
function myFunction(){
    document.getElementById("ubah").innerHTML ="aku zaki";
}
// end button
// belajar let
let potongan;
potongan = 100;
if(true){
    potongan = 400;
    console.log(potongan); //outputnya 400 karena let diskon bersifat lokal
}
// end belajar let
// belajar const
const WARNA_MERAH = "#F00";
const WARNA_BIRU = "#00F";
const WARNA_HIJAU = "#0F0";

let warnaBaju = WARNA_BIRU;
if(true){
    console.log(warnaBaju);
}
