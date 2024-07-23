/**
 * ---------------Diyalog Kutuları-----------------
 *      -Alert
 *      -Prompt
 *      -Confirm
 */

console.log(window);

//alert => bir function'dir. Bir uyarı dondurmede kullanilir.
alert("İsleminize devam etmeden once kaydetmelisiniz!");

//prompt => bir function'dir. Kullanicidan deger almada kullanilir.
prompt("Isminizi giriniz:");

//yukarıda kullanicidan alinan degeri bir degiskene atayarak tutabiliriz.
let isim=prompt("Isminizi giriniz:");
console.log(isim);
let yas=prompt("Yasinizi giriniz:");
console.log(yas);


//kullanicidan alinan degerler her zaman string turundedir.
console.log(typeof isim); //cikti: string
console.log(typeof yas); //cikti: string

//alinan degerleri farklı turlerdeki (ornegin number) islemlere tabi tutmak istiyorsak 'tur donusumu' yapmalıyız.


//confirm => bir function'dir. Geriye true veya false bir ifada secmemizi bekler.
let sonuc=confirm("Silmek istediginize emin misiniz?");
console.log(sonuc);
