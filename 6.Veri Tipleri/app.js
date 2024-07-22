/**
 * Veri Tipleri
 * 
 * (primitive olanlar)
 * 1-String
 * 2-Number
 * 3-Boolean
 * 4-Null
 * 5-Undefined
 * (referans tipli olanlar)
 * 6-Object
 * 7-Function
 */


let isim = "Zeliha ORHAN";
console.log(typeof isim)  //typeof => yanına yazılan degiskenin turunu ekrana yazdırır

let sayi1=10;
let sayi2=5.6;
console.log(sayi1+sayi2);
console.log(typeof sayi1);

let a = "5";
console.log(typeof a) //string
let b="2";
console.log(a+b) //cikti: 52

let m = null; //bos
m=27;
console.log(m);

//undefined => bir deger atanmamıs degiskendir.
let v;
console.log(typeof v); //cikti : undefined

//object
let insan={
    isim: "Zeliha",
    soyisim: "Orhan",
    yas: 24
}
console.log(insan);
console.log(typeof insan);

let rakamlar =[1,2,3,4,5];
console.log(typeof rakamlar); //cikti : object
 
//function
let func=function(){
    console.log("Merhaba");
}
func();
console.log(typeof func);