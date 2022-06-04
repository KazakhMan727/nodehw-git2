const express = require("express");
const carwashesRouter = express.Router();

let carwashesArray = [
    {
        cityID: 1,
        carwashID: 1,
        street: "street"
    },

    {
        cityID: 1,
        carwashID: 2,
        street: "street"
    },

    {
        cityID: 1,
        carwashID: 3,
        street: "street"
    },

    {
        cityID: 1,
        carwashID: 4,
        street: "street"
    },

    {
        cityID: 1,
        carwashID: 5,
        street: "street"
    },

    {
        cityID: 2,
        carwashID: 6,
        street: "street"
    },

    {
        cityID: 2,
        carwashID: 7,
        street: "street"
    },

    {
        cityID: 2,
        carwashID: 8,
        street: "street"
    },

    {
        cityID: 2,
        carwashID: 9,
        street: "street"
    },

    {
        cityID: 2,
        carwashID: 10,
        street: "street"
    },

    {
        cityID: 3,
        carwashID: 11,
        street: "street"
    },

    {
        cityID: 3,
        carwashID: 12,
        street: "street"
    },

    {
        cityID: 3,
        carwashID: 13,
        street: "street"
    },

    {
        cityID: 3,
        carwashID: 14,
        street: "street"
    },

    {
        cityID: 3,
        carwashID: 15,
        street: "street"
    }
];

carwashesRouter.get("/", (request, response) => {
    response.send(carwashesArray);
});

carwashesRouter.get("/city/:id", (request, response) => {
    let id = request.params.id;
    let foundCarwashes = carwashesArray.filter(item => item.cityID == id);
    response.send(foundCarwashes);
});

module.exports = carwashesRouter;