import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

console.log("Welcome to the main module")

const yearlyPlan = createPlan()
console.log("Yearly Plan:", yearlyPlan)

const asparagus = createAsparagus()
console.log("Asparagus Obj:", asparagus)

const corn = createCorn()
console.log("Corn Obj:", corn)

const potato = createPotato()
console.log("Potato Obj:", potato)

const soybean = createSoybean()
console.log("Soybean Obj:", soybean)

const sunflower = createSunflower()
console.log("Sunflower Obj:", sunflower)

const wheat = createWheat()
console.log("Wheat Obj:", wheat)