export abstract class Vehicle{
    abstract getNumberOfSeats(): number
}

export class Toyota extends Vehicle{
    constructor(private numOfSeats: number){
        super()
    }
    getNumberOfSeats(){
        return this.numOfSeats
    }
}
export class Honda extends Vehicle{
    constructor(private numOfSeats: number){
        super()
    }
    getNumberOfSeats(){
        return this.numOfSeats
    }
}
export class Fiat extends Vehicle{
    constructor(private numOfSeats: number){
        super()
    }
    getNumberOfSeats(){
        return this.numOfSeats
    }
}
export class BMW extends Vehicle{
    constructor(private numOfSeats: number){
        super()
    }
    getNumberOfSeats(){
        return this.numOfSeats
    }
}
export class MercedesBenz extends Vehicle{
    constructor(private numOfSeats: number){
        super()
    }
    getNumberOfSeats(){
        return this.numOfSeats
    }
}

export class Volvo extends Vehicle{
    constructor(private numOfSeats: number){
        super()
    }
    getNumberOfSeats(){
        return this.numOfSeats
    }
}