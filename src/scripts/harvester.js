export function harvestPlants(plantsArray) {
    const plantObjectsArray = []

    for (plant in plantsArray) {
        if (plant.type.toLowerCase() == 'corn') {
            for (let index = 0; index < plant.output / .5; index++){
                plantObjectsArray.push(plant);
            }
        }
        else {
            for (let index = 0; index < plant.output; index++) {
                plantObjectsArray.push(plant);
            }
        }
    }
    console.log(plantObjectsArray);
    return plantObjectsArray;
}





