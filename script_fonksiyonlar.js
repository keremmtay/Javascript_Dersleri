// Fonksiyonlar (Metodlar): 

function selamVer()
{
    console.log("Merhaba NA203 - Akşam Sınıfı");
}

selamVer();

// parametre alan fonksiyonlar

function topla(sayi1, sayi2)
{
    console.log(sayi1 + sayi2);
}

topla(5, 8);

topla("İstanbul", "Kadıköy");

// Geriye değer döndüren fonksiyonlar

function sehir()
{
    return "İstanbul";
}

let city = sehir();
console.log(city);

// parametre alan ve geriye değer döndüren

function topla1(sayi1, sayi2)
{
    let sonuc = sayi1 + sayi2;
    return sonuc;
}

console.log(topla1(3,5));