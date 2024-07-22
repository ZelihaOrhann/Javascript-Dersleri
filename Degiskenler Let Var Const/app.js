// Var Let Const

//Degisken nedir?

/**
 * JS'de degisken tanımlanırken int, double,string vs. gibi degisken turu belirtilmez
 * var, let veya const kullanılır
 * var/let/const degiskenIsmi=degiskenDegeri;
 * or: let sayi=10
 * 
 */


// ! 'var' ile tanımlanmış degiskene function scope ozelligine sahiptir
// ! 'let/const' ile tanımlanmıs degisken block scope ozelligine sahiptir.

function selamVer(){
    var selam="Herkese selam"; //function scope

    console.log(selam)

    if(true){
        var b=10;
        
    }
    console.log(b); // ! var ile tanımlandığı için burdan erişilebilir
}

selamVer();

function selamVer(){
    var selam="Herkese selam"; //function scope

    console.log(selam)

    if(true){
        let b=10;
        
    }
    console.log(b); // ! let ile tanımlandığı için burdan erisilemez
}

selamVer();

// * var ile aynı isimde birden fazla degisken tanımlanabilir.
var a =5;
var a =5;
console.log(a);

// * let/const ile aynı isimle sadece bir degisken olusturulabilir.
if(true){
    let b=10;
    let b = 5; //hata verir
}
console.log(b);

/**
 * Let ve Const arasindaki fark:
 * 'const' ile tanımlanan degiskenlerin degeri sabittir, sonrasinda degistirilmek istenirse hata verir, fakat let ile bir degisken tanimlanirsa degeri sonradan degistirilebilir.
 * 
 */

const a = 10;
a = 12; //hata verir
console.log(a); 

let b = 7;
b = 11; //hata vermez
console.log(b);

