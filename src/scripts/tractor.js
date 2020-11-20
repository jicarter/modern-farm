import { createAsparagus } from "./seeds/asparagus";
import { createPotato } from "./seeds/potato";
import { theField } from './field.js'
import { createCorn } from "./seeds/corn";
import { createSoybean } from "./seeds/soybean";
import { createSunflower } from "./seeds/sunflower";
import { createWheat } from "./seeds/wheat";

theField = []

export function plantSeeds(plan) {
    for (plantArray in plan) {
       for (plant in plantArray) {
           if (plant.toLowerCase() == 'potato') {
               theField.push(createPotato())
           }
           else if (plant.toLowerCase() == 'asparagus') {
               theField.push(createAsparagus())
           }
           else if (plant.toLowerCase() == 'corn') {
               theField.push(createCorn())
           }
           else if (plant.toLowerCase() == 'soybean') {
               theField.push(createSoybean())
           }
           else if (plant.toLowerCase() == 'sunflower') {
               theField.push(createSunflower())
           }
           else if (plant.toLowerCase() == 'wheat') {
               theField.push(createWheat())
           }
        }      
    }

}