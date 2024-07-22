// Var - Let - Const

/**
 
    ------------SCOPE (kapsam)--------------

    -> Global Scope
    -> Function Scope
    -> Block Scope



 */


var a = 10; //global scope : degisken herhangi bir scope içinde olmamalı, global degiskene her yerden erişilebilir.
console.log(a);


function method1(){
    var sayi=10; //function scope : degiskene sadece fonksiyon parantezleri içinden erişilebilir.
    console.log(sayi);
}

method1();

function method2(){
    if(true){
        //burası bir block scope'tur
        var a=5; //block scope içerisinde tanımlanan degisken, sadece block scope içerisinden erişilebilir.
    }
    while(true){
        //burası da bir block scope'tur.
    }

}
