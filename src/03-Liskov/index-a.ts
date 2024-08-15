/**
 * 03 Liskov sustitution
 */

import { BMW, Fiat, Honda, MercedesBenz, Toyota } from "./index-b"

(() => {
    const printCarSeats = (cars: Toyota | Honda | Fiat | BMW | MercedesBenz) => {

        for(const key in cars){
            if(cars[key] instanceof Toyota){
                console.log('Toyota: ', cars[key].setToyotaSeats())
            }
            if(cars[key] instanceof Honda){
                console.log('Honda: ', cars[key].setHondaSeats())
            }
            if(cars[key] instanceof Fiat){
                console.log('Fiat: ', cars[key].setFiatSeats())
            }
            if(cars[key] instanceof BMW){
                console.log('BMW: ', cars[key].setBMWSeats())
            }
            if(cars[key] instanceof MercedesBenz){
                console.log('MercedesBenz: ', cars[key].setMercedesBenzSeats())
            }

        }
    }

    const cars = [
        new Toyota(5),
        new Honda(2),
        new Fiat(2),
        new BMW(3),
        new MercedesBenz(5)
    ];

    printCarSeats(cars)
})()