// const PI = 3.1415;
// const radiusmeter = 5;
// const area = PI * radiusmeter * radiusmeter; // ~ 78.54 sq meters

// let plants = 20;
// const plant_area = 0.8;

// // Growing Pains
// for (let week = 1; week <=3; week++) {
//     plants *= 2;
//     console.log (plants);
//     console.log (week);
//     let plants_area = plants * plant_area; // ~ 16 sq meters
//     let garden_plants_area = plants_area / area ; 
//     if (garden_plants_area >= 0.8) {
//         console.log(Math.round(garden_plants_area*100) + "% occupied on the "+" week. Pruned" );} 
//     else if (garden_plants_area >=0.5 && garden_plants_area <=0.8) {
//         console.log(Math.round(garden_plants_area*100) + "% occupied on the " + " week. Monitored");}
//     else { console.log(Math.round(garden_plants_area*100) + "% occupied on the " + " week. Planted"); }
//   }

const PI = 3.1415;
const startingPlantsUpdated = 100; // Starting with 100 plants
const minSpacePerPlant = 0.8; // square meters
const weeksUpdated = 10; // For a period of 10 weeks

// Calculate after 10 weeks without pruning
const finalPlantCount = startingPlantsUpdated * Math.pow(2, weeksUpdated);

// Calculate space required based on the final plant count
const additionalSpaceRequired = finalPlantCount * minSpacePerPlant;

// Calculate the radius garden  
const expandedGardenRadius = Math.sqrt(additionalSpaceRequired / PI);

console.log(`Additional space required: ${additionalSpaceRequired} square meters.`);
console.log(`Radius of the expanded garden: ${expandedGardenRadius.toFixed(2)} meters.`);