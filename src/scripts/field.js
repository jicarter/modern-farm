import { createCorn } from "./seeds/corn.js"



export const theField = []

export const addPlant = (seed) => {
    
    if ( seed == createCorn ) {
        theField.push(seed[0], seed[1])
    }
    else {
        theField.push(seed)
    }
}

export function usePlants() {
    
    return theField.slice()
    
}

