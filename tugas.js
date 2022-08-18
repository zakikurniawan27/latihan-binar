const dataDiri = [
    {
        nama : 'Muhammad Zaki Kurniawan',
        umur : 21,
        alamat :{
            alamatLengkap :'Jl. Dau Mulia Residence No.D4',
            RT : 01,
            RW : 00,
            Kelurahan : 'SumberSekar',
            Kecamatan : 'Dau',
            Kota : 'Malang',
            Provinsi : 'Jawa Timur',
            Kodepos : 65151
        },
        hobi : ['Badminton','Game','Futsal','Berenang','nonton anime'],
        single : true,
        pekerjaan : 'Mahasiswa',
        makananFavorit : [
            ['Rawon','Mangga','Es Lemon Tea'],
            ['Pecel','Apel','Jus Mangga']
        ]
    },
    {
        nama : 'Zlatan Ibrahimovic',
        umur : 40,
        alamat :{
            alamatLengkap :'Jl. Tirto Utomo gang 01 No. 2',
            RT : 10,
            RW : 01,
            Kelurahan : 'Landung Sari',
            Kecamatan : 'MulyoAgung',
            Kota : 'Malang',
            Provinsi : 'Jawa Timur',
            Kodepos : 65214
        },
        hobi : ['Bola','Berburu','Taekwondo','Bermain salju','ngomel'],
        single : false,
        pekerjaan : 'Pemain Bola',
        makananFavorit : [
            ['Bakso','Anggur','Es Cendol'],
            ['Sate Ayam','Durian','Es nutrisari']
        ]
    },
    {
        nama : 'Chiharu Shida',
        umur : 25,
        alamat :{
            alamatLengkap :'Jl. Kemerdakaan No.10',
            RT : 21,
            RW : 00,
            Kelurahan : 'Tanjung',
            Kecamatan : 'Sumber rejo',
            Kota : 'Malang',
            Provinsi : 'Jawa Timur',
            Kodepos : 65143
        },
        hobi : ['Badminton','Jalan-Jalan','kuliner','Game','dengarin musik'],
        single : true,
        pekerjaan : 'Atlet Bulutangkis',
        makananFavorit : [
            ['Gado-gado','Strawberry','Es coklat'],
            ['Mie Goreng','jeruk','Es teh']
        ]
    },
    {
        nama : 'Kanna Hashimoto',
        umur : 23,
        alamat :{
            alamatLengkap :'Jl. Dermo No.07',
            RT : 10,
            RW : 03,
            Kelurahan : 'Sumber Sari',
            Kecamatan : 'Tanjung',
            Kota : 'Malang',
            Provinsi : 'Jawa Timur',
            Kodepos : 65101
        },
        hobi : ['Bernyanyi','Akting','cosplay','Melukis','Jalan-Jalan'],
        single : true,
        pekerjaan : 'Artis dan Penyanyi',
        makananFavorit : [
            ['Nasi Goreng','Coklat','Es teh'],
            ['sushi','semangka','Es lemon tea']
        ]
    },
    {
        nama : 'Samsudin',
        umur : 33,
        alamat :{
            alamatLengkap :'Jl. manggis No.02',
            RT : 04,
            RW : 00,
            Kelurahan : 'campursari',
            Kecamatan : 'Kademangan',
            Kota : 'Blitar',
            Provinsi : 'Jawa Timur',
            Kodepos : 62103
        },
        hobi : ['Sulap','Jalan-Jalan','bikin video','tidur','cerita'],
        single : false,
        pekerjaan : 'Pengobatan tradisional dan sulap',
        makananFavorit : [
            ['Pecel','salak','kopi'],
            ['Pizza','durian','teh']
        ]
    }
]
console.log(dataDiri[4].nama, dataDiri[4].makananFavorit[0][0])