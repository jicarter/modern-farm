import { createPlan } from './plan.js';
const yearlyPlan = createPlan();
console.log(yearlyPlan);

import { createSoybean } from './seeds/soybean.js';
const soybeanSeed = createSoybean();
console.log(soybeanSeed);

import { createCorn } from './seeds/corn.js';
const cornSeed = createCorn();
console.log(cornSeed);

import { createSunflower } from './seeds/sunflower.js';
const sunflowerSeed = createSunflower();
console.log(sunflowerSeed);

import { createAsparagus } from './seeds/asparagus.js';
const asparagusSeed = createAsparagus();
console.log(asparagusSeed);

import { createWheat } from './seeds/wheat.js';
const wheatSeed = createWheat();
console.log(wheatSeed);

import { createPotato } from './seeds/potato.js';
const potatoSeed = createPotato();
console.log(potatoSeed);

import { usePlants } from './field.js';
const plantField = usePlants();
console.log(plantField);




