function Student(ime, adresa, telefon, kurs) {
    this.ime = ime;
    this.adresa = adresa;
    this.telefon = telefon;
    this.kurs = kurs;

    this.getInfo = function () {
        return ( "Ime: " + this.ime + "\n" +
        "Adresa: " + this.adresa + "\n" +
        "Telefon: " + this.telefon + "\n" +
        "Kurs: " + this.kurs 
        );
    };
}

var student1 = new Student(
    "Ebonie Rangel", 
    "7175 Yukon Street", 
    "(507) 833-3567",
    "Geography"
    );
var student2 = new Student(
    "Keenan Ellwood",
    "2 Elm Lane",
    "(894) 831-6482",
    "History"
);
var student3 = new Student(
    "Kailan Smart",
    "795 Harvard Street",
    "(925) 856-5167",
    "Biology"
);

var getInfo1 = student1.getInfo();
var getInfo2 = student2.getInfo();
var getInfo3 = student3.getInfo();

console.log(getInfo1);
console.log(getInfo2);
console.log(getInfo3);


fetch(
    "https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt"
    )
    .then((response) => {
        return response.text();
      })
      .then((data) => {
        var text = data.split("\n");
  
        var noviStudenti = [];
        while (text.length > 0) {
          var noviStudent = new Student(text[0], text[1], text[2], text[3]);
          noviStudenti.push(noviStudent);
          text.splice(0, 4);
  
          document.getElementById("ispis").innerHTML +=
            noviStudent.getInfo() + "<br>";
        }
      });
 