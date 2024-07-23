// ARITMETIK OPERATORLER

/**
 * = atama operatoru
 * +
 * -
 * *
 * /
 * %
 * ++
 * --
 * **
 */

//string + number => toplanmaz,birleştirilir

let not1=60;
let not2=70;

let sayi1="5";
let sayi2=2;

console.log(sayi1+sayi2); //cikti: 52

console.log("Notlarinizin toplami:" + (not1+not2)); //cikti: Notlarinizin toplami: 130

let s1=5;
let s2=10;

console.log(s1*s2); //cikti: 50

let n1=100;
let n2=70;
let sonuc=(n1+n2)/2;
console.log(sonuc); //cikti: 85

//% => mod alma operatoru
console.log(10%3);

//++ => 1 arttırmak icin kullanılır
let a = 10;
a++;
console.log(a);

//-- => 1 azaltmak icin kullanılır
let b=7;
b--;
console.log(b);

// ** => bir sayinin üssünü almada kullanılır
console.log(2**3); //cikti: 8





//ATAMA OPERATORLERİ
/**
 * =
 * ==
 * ===
 * +=
 * *=
 * /=
 * %=
 * **=
 * 
 */

let z = 5;

// == => eşit midir anlamında kullanılır ve geriye boolean bir deger doner.
console.log(5==5); //cikti : true
console.log(5=="5"); //cikti : true

// === => hem tiplerinin hem degerlerinin esit olup olmadıklarına bakar
console.log(5===5); //cikti: true
console.log(5==="5"); //cikti: false

let sayi = 4;
sayi+=2;
console.log(sayi); //cikti : 6
sayi*=2;
console.log(sayi); //cikti : 12
sayi/=4;
console.log(sayi); //cikti : 3
sayi%=2;
console.log(sayi); //cikti : 1
sayi**=1;
console.log(sayi); //cikti : 1


//MANTIKSAL OPERATORLER

/**
 * && : ve (kosulların hepsi dogru iken dogrudur, diger durumlarda yanlistir)
 * || : veya (kosullardan sadece biri dogru oldugunda dogru, sadece kosulların tamamı yanlıs oldugunda yanlıstır)
 * ! : degil (true != false , false != true)
 */

let yas = 20;
let para = 3500;
let saglikliMi = false;
let hakSayisi=3;

console.log(yas>18 && para>3000 && saglikliMi==true); //cikti : false
console.log(yas>18 && para>3000 || saglikliMi==true); //cikti : true
console.log( !(5>3) ); // ! => bir şeyin tersini alır
console.log((para>3000 && hakSayisi>1) || (yas>18 && saglikliMi));




