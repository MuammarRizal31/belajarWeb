        //TIPE DATA
    /*  ESCAPE
//ESCAPE NULL UNTUK MEMBUAT TANDA KUTIP DIDALAM STRING DAPAT DIBACA
            ESCAPE CHARACTER  ||       HASIL
                -\0           ||   Karakter Null
                -\'           ||        '
                -\"           ||        "
                -\\           ||        \
                -\n           ||  new line/baris baru
                -\t           ||        tab
                -\b           ||     backSpace
                -\uxxxx       ||      unicode/simbol
                untuk nilai unicode/simbol
                        -\u00A9 = simbol copyright
                        -\u00AE = simbol R
                        -\u00B1 = simbol tambah kurang
                        -\u00B5 = simbol robot kayanya
                        -\u2122 = simbol TM

                UNTUK NILAI BOOLEAN PADA STRING
                "Muammar Rizal" == "muammar Rizal"  //nilai akan false karena m nya beda

                .length 
                -menghitung panjang string
                //"MuammarRizal"  //nilai akan 12 karena panjang nya adalah 12 kata
*/

var jangs="Hari ini adalah hari jum\'at"; //hasilnya akan sama
var jangs="Hari ini adalah hari \n jum\'at" //hasilnya akan menambahkan baris baru pada jumat
//dan begitupun seterusnya