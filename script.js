console.log("Merhaba NA-203 Akşam Sınıfı");

// Değişken tanımlama

var isim = "Mustafa";

var ucret = 3000;

var aktifMi = true;

var soyad

soyad = "Kavusdu"

console.log(soyad)

var isim = "Ayşe";

console.log(isim);

// Noktalı virgül koymak zorunlu değil ancak kodun okunabilirliğini arttırıyor.

console.log(typeof ucret);

// let keywordu = degişken tanımlaması için kullanılıyor.

let isim1 = "Ahmet";

// var ile değişken tanımlamalarında aynı değişken ismini tekrar kullanabiliyoruz ancak let komutu buna izin vermiyor

var sayi1 = 5;
var sayi2 = 3;
console.log(sayi1 + sayi2);

// Tür Dönüşümü

var sayi3 = "15";
var sayi4 = "42";
console.log(Number(sayi3) + Number(sayi4)); // string veriyi number türüne çeviriyoruz

var sayi5 = 156;
console.log(sayi5.toString()); // herhangi bir veriyi string türe çeviriyoruz.

console.log(typeof sayi5);
console.log(typeof isim);
console.log(typeof aktifMi);

var degisken;
console.log(typeof degisken);       // undefined

// if else blokları

if (true) {
    // condition true ise burası
} else {
    // condition false ise burası
}

var mesaj = "Bugün hava çok güzel";

console.log(mesaj.toUpperCase());

// Date & Times

let simdi = new Date();

result = simdi;
result = simdi.getFullYear();
result = simdi.getDay();  // Haftanın kaçıncı günündeysek o veriyi number olarak veriyor. Pazar = 0, Pazartesi = 1
result = simdi.getMonth();

console.log(result);

// Dizi oluşturma

let urunler = ["Kırmızı Kalem", "Mavi Kalem", "Sarı Kalem"];

console.log(urunler[0]);
console.log(urunler[1]);
console.log(urunler[2]);

let fiyatlar = [15, 50, 30];

console.log(fiyatlar[0]);
console.log(fiyatlar[1]);
console.log(fiyatlar[2]);

let urun = ["Kırmızı Kalem", 15, 3]

let urun1 = []; // içi boş bir dizi, yani verisi olmayan bir dizi

urun1[0] = "Mavi Kalem";
urun1[1] = 30;
urun1[2] = 20;

let urun2 = [
    "BMW",
    150000,
    ["Kırmızı", "Mavi", "Beyaz", "Siyah"]
];

console.log(urun2[0]);
console.log(urun2[1]);
console.log(urun2[2]);
console.log(urun2[2][1]);

// yukarıdaki gibi veriler bir dizi içinde tutulabilir. Ama bu çok okunaklı olmayacak. Bunun yerine bir object türde bir değişken tanımlayıp verileri key/value mantığı ile Json formatta tutabiliriz.

let urun3 = {
    "name" : "Kırmızı Kalem",
    "Fiyat" : 15,
    "Adet" : 3
}

// object içinden verileri okurken:

console.log(urun3.name);
console.log(urun3.Fiyat);
console.log(urun3.Adet);

// object içinde de farklı object'ler olabiliyor

let urun4 = {
    "Marka" : "BMW",
    "Fiyat" : 150000,
    "Özellikler" :
        {
            "Renk" : "Kırmızı",
            "YolcuSayısı" : 2,
            "YakıtTipi" : "Elektrikli",
            "VitesTipi" : "Otomatik"
        }
}
console.log(urun4.Marka);
console.log(urun4.Fiyat);
console.log(urun4.Özellikler);
console.log(urun4.Özellikler.Renk);
console.log(urun4.Özellikler.YolcuSayısı);
console.log(urun4.Özellikler.YakıtTipi);
console.log(urun4.Özellikler.VitesTipi);
