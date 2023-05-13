// getElementById ("parametre"): parametre olan yere o etiketin id'sini yazdığımda ilgili ekiteti elde etmiş oluorum.
// innerHtml = elde ettiğim etiketin içindeki alana innerHTML ile ulaşabilirim.

//var pElementi = document.getElementById("paragraf1").innerHTML;

// alert(pElementi);

//document.getElementById("paragraf1").innerHTML="Bugün hava çok soğuk.";

//var havaDurumu = 10;
//if (havaDurumu > 15) {
    //document.getElementById("paragraf2").innerHTML = "Bugün hava çok güzel";
//} else {
    //document.getElementById("paragraf2").innerHTML = "Bugün hava çok soğuk ve kapalı";
//}

// Etiket isimleri ile de ilgili elemana ulaşabilirim.

//getElementsByTagName("tag_ismi")

// var pEtiketleri = document.getElementsByTagName("p");

// console.log(pEtiketleri);

// alert(pEtiketleri[2].innerHTML);

// liste elemanlarına tag/etiket ismi ile ulaşmak istediğimizde:

// var listeler = document.getElementsByTagName("ul");
// var sehirler = listeler[0].getElementsByTagName("li");
// console.log(sehirler);
// alert(sehirler[4].innerHTML);

// for (let index = 0; index < sehirler.length; index++) {
//     console.log(sehirler[index].innerHTML);
//     if (sehirler[index].innerHTML == "Eskişehir") 
//     {
//         sehirler[index].style.backgroundColor = "yellow";
//         sehirler[index].innerHTML = "Kars";
//     }
    
// }


// class isimleri ile de ilgili etiketleri elde edebiliriz.
// getElementsByClassName ("parametre") : parametre yerine de bulmak istediğimiz class adını yazıyoruz.

// var classElemanlari = document.getElementsByClassName("class1");
// var elemanSayisi = classElemanlari.length;
// alert("class1 etiketlerinin sayısı...: " + elemanSayisi);
// alert(classElemanlari[0].innerHTML);

// querySelectorAll("parametre"): örneğin class1'i birden çok etiket kullanabilir. Ben sadece p etiketlerinden class1'i kullananları seçmek istiyorsam aşağıdaki gibi bir kod yazabilirim.

// var queryElemanlari = document.querySelectorAll("p.class1");
// alert(queryElemanlari.length);
// console.log(queryElemanlari);

// getElementsByName("parametre"): elde etmek istediğim etiketin name özelliğindeki veriyi kullanarak ilgili etiketi elde edebilirim.


// var nameElementler = document.getElementsByName("Ad");
// alert(nameElementler[0].value);
// nameElementler[0].value = "Kerem";

// Event
// AddEventListener():

// document.getElementById("jsId").addEventListener("click", degistir);

// function degistir()
// {
//     document.getElementById("div1").style.backgroundColor = "blue";
// }

// document.getElementById("paragraf2").addEventListener("mouseover", function(){this.style.backgroundColor = "yellow"});

// document.getElementById("paragraf2").addEventListener("mouseover", degistirMouseover);

// function degistirMouseover()
// {
//     if (document.getElementById("paragraf2").style.backgroundColor == "yellow") 
//     {
//         document.getElementById("paragraf2").style.backgroundColor = "red"
//     } else 
//     {
//         document.getElementById("paragraf2").style.backgroundColor = "yellow"
//     }
// }


// Node:
// var node = document.getElementById("p4");
// alert(node.childNodes[0].nodeValue);

var baslik = document.createElement("h2");  // yeni elementimizi oluşturuyoruz
var nodeText = document.createTextNode("Network Akademi"); // text bilgisini oluşturuyoruz.
baslik.appendChild(nodeText);   // text bilgisini yeni oluşturduğumuz elementin içinde yerleştiriyoruz

var div2 = document.getElementById("div2");  // hangi elementin içinde yerleştiriceksek o elementi seçiyoruz
div2.insertBefore(baslik, p4);  // hangi elementi(yani baslik), hangi elementten(p4) önce(insertBefore) konumlandıracağımızın bilgisini veriyoruz.

// var olan bir etiketi sayfadan kaldırabiliyoruz.
var div1 = document.getElementById("div1");
var p1 = document.getElementById("p1");
div1.removeChild(p1);

var p4 = document.getElementById("p4");
div2.replaceChild(baslik, p4);