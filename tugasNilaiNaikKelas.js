// const nilaiKelulusan = (a,b,c,absen) =>{
//     nilaiTotal = (a+b+c)/3
//     if(nilaiTotal&absen >= 80 ){
//         return 'Naik Kelas'
//     }else{
//         return 'Tidak Naik Kelas'
//     }
// }
// module.exports = nilaiKelulusan
// // console.log(nilaiKelulusan(90,70,75,80))

const createPerson = function(person){
    fs.writeFileSync('./person.json',JSON.stringify(person))
    return person
}
const biodata = createPerson({
    nama: 'zaki',
    umur: 21,
    alamat: 'Malang'
})