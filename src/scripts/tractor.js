import { addPlant } from "./field"
import { createAsparagus } from "./seeds/asparagus"
import { createPotato } from "./seeds/potato"
import { createSoybean } from "./seeds/soybean"
import { createSunflower } from "./seeds/sunflower"
import { createWheat } from "./seeds/wheat"


export const plantSeeds = (plantingPlan) => {
    plantingPlan.forEach(rowOfPlants => {
        rowOfPlants.forEach(plantInRow => {
            switch(plantInRow) {
                case "asparagus" :
                    addPlant(createAsparagus())
                    break;
                case "corn" :
                    addPlant(createCorn())
                    break;
                case "potato" :
                    addPlant(createPotato())
                    break;
                case "soybean" :
                    addPlant(createSoybean())
                    break;
                case "sunflower" :
                    addPlant(createSunflower())
                    break;
                case "wheat" :
                    addPlant(createWheat())
                    break;                  
                }
            }
        )
    }
}

//TODO figure out this syntax error