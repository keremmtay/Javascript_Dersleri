
// Javascript'te Döngüler

for (let index = 1; index <= 10; index++) {

    //console.log(index);
    
}


let sayilar = [1, 25, 23, 64, 89, 25, 42, 63, 32, 0, 5, 50];

console.log("******* let index in sayilar *********");

// in ile kullandığımda tanımlamış olduğum index değişkeni sayilar dizisindeki her bir indeksi alıyor.


// aşağıdaki 2 kullanımda da indeks numarası üzerinden verileri alıyoruz.


for(let index in sayilar)
{
    console.log(index);
    console.log(sayilar[index]);
}

console.log("******* let index = 0; index < sayilar.length; index++ *********");

for (let index = 0; index < sayilar.length; index++) {

    console.log(sayilar[index]);
    
}

// Eğer ki dizi içindeki indeks numaraları önemli değil ise kullanacağımız for döngüsü aşağıdaki gibi olabilir

// in : index numarasını alıyoruz

// of : verinin kendisini alıyoruz

console.log("******* let sayi of sayilar *********");

for(let sayi of sayilar)
{
    console.log(sayi);
}

// index numrasına ihtiyacımız yok ise aşağıdaki gibi forEach metodu ile de her bir veriye ulaşabiliriz.

console.log("******* sayilar.forEach(sayi => {} *********");

sayilar.forEach(sayi => {
    console.log(sayi)
});

// object içindeki verilere de for döngüsü ile ulaşabiliriz

let urun = {
    "name" : "Kırmızı Kalem",
    "Fiyat" : 15,
    "Adet" : 3
}

console.log("Adet...: " + urun.Adet);
console.log("Ürün Adı...: " + urun["name"]);

for(let key in urun)
{
    console.log(key);
    console.log(urun[key]);
}