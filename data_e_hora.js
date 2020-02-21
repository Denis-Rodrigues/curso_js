var d = new Date() 
console.log(d.toUTCString()); //                            R: Thu, 20 Feb 2020 22:51:32 GMT
console.log(d.toDateString()); //                           R: Thu Feb 20 2020
console.log('getDate ' + d.getDate()); //                   R: getDate 20
console.log('getDay ' + d.getDay());//                      R: getDay 4
console.log('getFullYear ' + d.getFullYear());//            R: getFullYear 2020
console.log('get Hours ' + d.getHours());//                 R: get Hours 19
console.log('getMilliseconds ' + d.getMilliseconds());//    R: getMilliseconds 660
console.log('getMinutes ' + d.getMinutes());//              R: getMinutes 51
console.log('getMonth ' + d.getMonth());//                  R: getMonth 1
console.log('getSeconds ' + d.getSeconds());//              R: getSeconds 32
console.log('getTime ' + d.getTime());//                    R: getTime 1582239092660
d.setDate(17)                                          //   R: 2020-02-17T23:12:57.407Z     
console.log(d);     

function formaData(data = new Date()){
    var dia = data.getDate()
    var mes = data.getMonth()+1
    var ano = data.getFullYear()

    if(dia.toString.length == 1) dia = '0'+dia;
    if(mes.toString.length == 1) mes = '0' + mes;
     
    return dia + '/' + mes + '/' + ano
}                                                                    
console.log(formaData()); // 20/02/2020




