const PV_MAX = 100;
let pvHeros = 0;
let tours = 0;

console.log("Le combat commence");

if (pvHeros <= 0) {
    console.log("💀 Le héros est KO");
}

for (let tour = 1; tour <= 3; tour++); {
    tours = tours + 1;
    console.log("Tour " + tour);
}

if (pvHeros === PV_MAX) {
    console.log("❤️ Le héros est en pleine forme");
} 
