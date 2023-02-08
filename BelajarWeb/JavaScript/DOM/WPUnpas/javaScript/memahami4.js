const Supir = function(nama,penumpang,trayek,kas){
    this.namaSpr = nama;
    this.namaPenumpang = penumpang;
    this.jurusan = trayek;
    this.kas = kas;

    this.penumpangNaik = function(nama){
        if (this.namaPenumpang == 0){
            this.namaPenumpang.push(nama);
            return this.namaPenumpang;
        }else{
            for (let i=0;i<this.namaPenumpang.length; i++){
                if(this.namaPenumpang[i] == nama){
                    return alert("nama tidak boleh sama bos!");
                }else if(this.namaPenumpang == undefined){
                    this.namaPenumpang.push(nama);
                    return this.namaPenumpang;
                }else{
                    this.namaPenumpang.push(nama)
                }
        }
    }
}
    this.penumpangTurun = function(nama,bayar){
        for (let i=0; i<this.namaPenumpang.length;i++){
            if(this.namaPenumpang[i] == 'undefined'){
                
            return this.namaPenumpang;
            }
        }
    }
}

const supir1 = new Supir('Jange',[],['kaisin','amsar'],0);
const supir2 = new Supir('jangs',[],['cilandak','kemang'],0);
console.log(supir1);
console.log(supir2);