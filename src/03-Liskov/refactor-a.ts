/**
 * 03 Liskov sustitution
 */

import { BMW, Fiat, Honda, MercedesBenz, Toyota, Vehicle, Volvo } from "./refactor-b"

(() => {
    const printCarSeats = (cars: Vehicle[]) => {

        // for(const key of cars){
        //     if(cars[key] instanceof Toyota){
        //         console.log('Toyota: ', cars[key].getNumberOfSeats())
        //     }
        //     if(cars[key] instanceof Honda){
        //         console.log('Honda: ', cars[key].getNumberOfSeats())
        //     }
        //     if(cars[key] instanceof Fiat){
        //         console.log('Fiat: ', cars[key].getNumberOfSeats())
        //     }
        //     if(cars[key] instanceof BMW){
        //         console.log('BMW: ', cars[key].getNumberOfSeats())
        //     }
        //     if(cars[key] instanceof MercedesBenz){
        //         console.log('MercedesBenz: ', cars[key].getNumberOfSeats())
        //     }

        // }

        cars.forEach(car => {
            console.log(car.constructor.name, car.getNumberOfSeats())
        })
    }

    const cars = [
        new Toyota(5),
        new Honda(2),
        new Fiat(2),
        new BMW(3),
        new MercedesBenz(5),
        new Volvo(6)
    ];

    printCarSeats(cars)
})()