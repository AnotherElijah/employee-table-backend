const Worker = require("../models/workerModel");

const seedWorkers = () => {
    //check if seeds already created
    Worker.findOne({firstName: "John", secondName: "Snow"}).then(
        (data) => {
            if (data === null) {
                const newWorker1 = new Worker({
                    "firstName": "John",
                    "secondName": "Snow",
                    "office": "Tallinn",
                    "birthDate": "1990-11-07",
                    "phoneNumber": 37256547345,
                    "tags": []
                }).save();
                const newWorker2 = new Worker({
                    "firstName": "Ivan",
                    "secondName": "Goldman",
                    "office": "Vilnius",
                    "birthDate": "1997-11-20",
                    "phoneNumber": 372653567,
                    "tags": []
                }).save();
                const newWorker3 = new Worker({
                    "firstName": "Ivan",
                    "secondName": "Johanson",
                    "office": "Tallinn",
                    "birthDate": "1989-04-07",
                    "phoneNumber": 371456567,
                    "tags": []
                }).save();
            }
        }
    )
}

module.exports = seedWorkers;
