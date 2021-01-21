let crops = []

export const addPlant = (seedObj) => {

    if (Array.isArray(seedObj)) {
        // TODO: figure out how to destructure an array into its objects and push them to the crops array
        for (const cornstalk of seedObj) {
            crops.push(cornstalk)
        }

    } else {
        crops.push(seedObj)
    }
}

export const usePlants = () => {
    return crops.slice()
}