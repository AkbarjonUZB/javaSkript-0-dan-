//  ja 0-dan boshlab 

// alert("salom bu alert bu sizga koplab imkonyatlar beradi")
// document.write("Hello World")  // bu sizga htmlga malumotlaarni chiqarishda yordam beradi
// console.log("")  // braezerning consol qismi hissoblanadi

// document.write(10+20)
// document.write(10-20)
// document.write(10*20)
// document.write(10/20)
// document.write(10===20)  //bular hamasi ishlaydi


// let FirstName=prompt("ismingizni kirgazing ")    //prompt qandaydur qiymatni soraydi ism raqam ... 
// document.write(FirstName)    // biz ozgaruvchini ekranda kora olamiz ok yoki Enter ni bosish orqali
// FirstName bu ozgaruvchi propt orqali kirgazilgan malumotni oziga oladi

///////////////////////////////////////////////////////////////////////////
// let nam = 8;
// nam = 10;
// nam=20+80;

// let ism = prompt("")
// document.write("sizning ismingiz "+ism+ " sizning yoshingiz " + nam + " da");



// samar badriddinov vazifalari 

const numberOfseries = prompt("nechta serial kordingiz ", "")

const seriesDB = {
   count: numberOfseries,
   series:{},
   actors:{},
   genres:[],
   privet:false,
};
  

const a = prompt("ohirgi korgan seryalingiz "),
  b = prompt("Necchi baho berasiz "),
  c = prompt("ohirgi korgan seryalingiz "),
  d = prompt("Necchi baho berasiz ")

seriesDB.series.a=b;
seriesDB.series.c=d;  

console.log(seriesDB);
    










