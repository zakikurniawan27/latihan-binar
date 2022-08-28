//belajar module pada node
// const os = require('os')
// console.log('free memory:', os.freemem())
// const nilaiKelulusan = require('./tugasNilaiNaikKelas.js')
// console.log(nilaiKelulusan(90,80,75,80))
// const fs = require('fs')
// const isi = fs.writeFileSync('./text.txt',"Aku Cinta Kamu")
// console.log(isi)
const fs = require('fs')
const biodata = require('./person.json')
console.log(biodata)
// // belajar var
// var diskon,nama;
// nama = "aku";
// nama = "siapa?"
// diskon = 500;
// if(diskon == true){
//     diskon = 300;
// }
// console.log(nama);
// console.log(diskon); //outputnya 500 karena variabel diskon bersifat global

// function scopeDiskon(){
//     var diskon = 300;
//     console.log(diskon)// outputnya 300 karena variabel diskon bersifat lokal
// }
// scopeDiskon()
// // end belajar var
// // button
// function myFunction(){
//     document.getElementById("ubah").innerHTML ="aku zaki";
// }
// // end button
// // belajar let
// let potongan;
// potongan = 100;
// if(true){
//     potongan = 400;
//     console.log(potongan); //outputnya 400 karena let diskon bersifat lokal
// }
// // end belajar let
// // belajar const
// const WARNA_MERAH = "#F00";
// const WARNA_BIRU = "#00F";
// const WARNA_HIJAU = "#0F0";

// let warnaBaju = WARNA_BIRU;
// if(true){
//     console.log(warnaBaju);
// }
// const stringIsiKutipSatu = 'ini string tapi aku bisa nulis kutip dua disini, liat nih ", tuh kan !'
// console.log(stringIsiKutipSatu);
// const namaDepan = "Zaki";
// const tempatLahir = "Tenggarong";
// console.log(`Hallo, Nama ku ${namaDepan}, aku lahir di ${tempatLahir}`);
// const hewan = ['zebra','macan','kudanil']

// const hewanZebra = (arrHewan) => arrHewan.reduce((total, current) => {
//     if(current === 'zebra'){
//         total.nama =current
//     }
//     return total
// }, {nama : ''})

// console.log(hewanZebra(hewan))