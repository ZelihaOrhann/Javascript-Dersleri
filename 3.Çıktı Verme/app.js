// Document write ile cikti verme (direkt html sayfasında çikti görünür)

 document.write("Hello world!");
 document.write("Zeliha ORHAN <br>"); //br'den sonraki ifade alt satıra yazdirilir.
 document.write(55);

//console log metodu ile cikti verme (html sayfasinin 'incele' kısmında 'console' ekranında görünür )

console.log("Hello JavaScript!");
console.log(3.53);
console.log(true);
console.log({name:"Zeliha",surname:"Orhan"});

console.clear() //console temizlemede kullanılır

let a = 5;
let b = 10;
console.log("Iki sayinin toplami:" , a+b);
console.log("Iki sayinin toplami:" + (a+b));


//Alert (uyari) popup ile cikti verme (html sayfasini actiginizda bir uyarı olarak ekrana cikti verir)

let c=10;
let d=12;
alert("Iki sayinin toplami:" + (c+d));

alert("Merhaba");

//YORUM SATIRI
//better comments eklentisi sayesinde yorum satırlarını renklendirebiliriz
// ? 
// !
// todo
// * 



