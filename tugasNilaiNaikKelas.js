const nilaiKelulusan = (a,b,c,absen) =>{
    nilaiTotal = (a+b+c)/3
    if(nilaiTotal&absen >= 80 ){
        return 'Naik Kelas'
    }else{
        return 'Tidak Naik Kelas'
    }
}
console.log(nilaiKelulusan(90,70,75,80))