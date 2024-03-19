//Veri havuzu tanımlanır Array/JS Object/JSON/Database
let takimlar = [
    "images/besiktas.png",
    "images/fenerbahce.png",
    "images/galatasaray.png",
    "images/trabzonspor.png",
  
  ];

//Programda sık kullanılacak HTML nesneleri değişkenlere aktarılır.
const takim1=document.getElementById("takim1");
const btnEslestir=document.getElementById("btnEslestir");
const sonucListe=document.getElementById("sonucListe");

//İşlemi tetikleyecek nesneneye olay dinleyici atanır.
btnEslestir.addEventListener("click",eslestir);

//Olay gerçekleşince olacak işlemler eslestir fonksiyonu altında adım adım tanımlanır.
function eslestir(){
    if(takimlar.length<2){
     
        return;
    }
    let rastgeleTakim1 = Math.floor(Math.random() * takimlar.length);
    takim1.src=takimlar[rastgeleTakim1];
    takimlar.splice(rastgeleTakim1,1);
    let rastgeleTakim2 = Math.floor(Math.random() * takimlar.length);
   
    if(rastgeleTakim1==rastgeleTakim2){
        alert("Aynı takımlar birbiriyle eşleşemez. Yeniden deneyin!");
        return;
    }
}

//Sonuç göstermek için gerekli fonksiyon tanımlanır.