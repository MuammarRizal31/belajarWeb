        //BOOLEAN ADALAH SEBUAH TIPE DATA YANG DIGUNAKAN UNTUK MEREPRESENTASIKAN LOGIKA TRUE DAN FALSE
    //BOOLEAN BIASANYA DIGUNAKAN PADA STATEMENT PENGKONDISIAN,UNTUK MENENTUKAN AKSI YANG BERBEDA DAN MENGATUR ALUR KENDALI PROGRAM

    /*
            TRUTHY              ||      FALSY
            -true               ||      false
            -non-zero number    ||        0
            -"String"           ||       ""
            -object             ||      undefined
            -arrays             ||      null
            -functions          ||      NaN

        -undefined adalah sebuah kondisi dimana sebuah variable yang belum di isikan nilai nya
        -null adalah sebuah kondisi dimana sebuah kondisi bisa kita isikan dengan nilai null{kosong}
    */
    var jangs = 10
    Boolean(jangs < 20);