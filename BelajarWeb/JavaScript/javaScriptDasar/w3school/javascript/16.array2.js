var nama,umur;
nama = 'Muammar Rizal';
umur = 21;
var IPsemester = [3.45,3.19,3.12];
function rizal(IPsemester){
    var total = 0;
    for (var i=0; i<IPsemester.length; i++){
        total += IPsemester[i];
    }
    return total/IPsemester.length;
}