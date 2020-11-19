//console.log("Welcome to the main module")

//const { createPlan } = require("./plan.js");
import { createPlan } from './plan.js';
createPlan();

import { createAsparagus } from './asparagus.js';
const asparagusSeed = createAsparagus();
console.log(asparagusSeed);

import { createSoybean } from './soybean.js';
const soybeanSeed = createSoybean();
console.log(soybeanSeed);

import { createCorn } from './corn.js';
const cornSeed = createCorn();
console.log(cornSeed);

//import { createSoybean } from './soybean.js';
//const soybeanSeed = createSoybean();
//console.log(soybeanSeed);