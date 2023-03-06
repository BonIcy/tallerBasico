function tablaa(Traditional, PointRange, Letter, SBGRating, Proficiency) {
    this.Traditional = Traditional;
    this.PointRange = PointRange;
    this.Letter = Letter;
    this.SBGRating = SBGRating;
    this.Proficiency = Proficiency;
  }
  const c1 = new tablaa("90-100", "12-14", "A", "4", "Exceeds proficiency");
  const c2 = new tablaa("80-89", "9-11", "B", "3", "Demonstrates proficiency");
  const c3 = new tablaa("70-79", "6-8", "C", "2", "Approaches proficiency");
  const c4 = new tablaa("60-69", "3-5", "D", "1", "Falls well below proficiency");
  const c5 = new tablaa("<60", "1-2", "E", "0", "Lacks all proficiency");
  const c6 = new tablaa("0", "0", "Z", "0", "No attemp made");
  
  console.table([c1, c2, c3, c4, c5, c6]);

nombre = prompt("Ingresa tu nombre")
r1 = [nombre + ", tu Point Range está entre: 12-14; tu letra es: A; y tu SBG Rating es de: 4. Muy bien todo, pero deja el vicio bro, sal a la calle un rato y socializa -.-"];
r2 = [nombre + ", tu Point Range está entre: 9-11; tu letra es: B; y tu SBG Rating es de: 3. Muy bien, solo que te faltaron puntos para la excelencia, mediocre esforzate más :/"];
r3 = [nombre + ", tu Point Range está entre: 6-8; tu letra es: C; y tu SBG Rating es de: 2. Regular, ponete a estudiar para que almenos subas un rango, aunque si bajas es mucho mejor para nosotros :)"];
r4 = [nombre + ", tu Point Range está entre: 3-5; tu letra es: D; y tu SBG Rating es de: 1. Tu estás mas afuera que adentro, preparate para estudiar en otro instituto porque a este no entras mas =)"];
r5 = [nombre + ", tu Point Range está entre: 1-2; tu letra es: E; y tu SBG Rating es de: 0. Excelente, casi el peor rango, a la proxima te esfuerzas para ser el peor y no dejar las cosas a medias, si haces algo lo haces bien o no lo haces :D"];
r6 = [nombre + ", tu Point Range está en: 0; tu letra es: Z; y tu SBG Rating es de: 0. Felicitaciones, el rango mas bajo y el peor, podes sentirte como un fracasado total toda tu vida y ni te vuelvas a aparecer por aqui porque te sacamos a machetazos :3"];

procs1 = prompt("Digita tu calificacion (De 0 hasta 100)");

while(procs1){
    if(procs1 >= 90 && procs1 <= 100){
        console.log(r1);
    }
    else if(procs1 >= 80 && procs1 <= 89){
        console.log(r2);
    }
    else if(procs1 >= 70 && procs1 <= 79){
        console.log(r3);
    }
    else if(procs1 >= 60 && procs1 <= 69){
        console.log(r4);
    }
    else if(procs1 >=1 && procs1 < 60 ){
        console.log(r5);
    }
    else if(procs1 == 0){
        console.log(r6);
    }
    else{
        console.log("Ingresa un valor valido...");
        setTimeout(function(){
            window.location.reload();
         }, 1500);
    }
    break;
}