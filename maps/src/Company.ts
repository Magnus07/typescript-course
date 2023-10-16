import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng:number
    }
    constructor () {
        this.name = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

    markerContent(): string{
        return `<h3>Company name: ${this.name}</h3>
        <h3>Catch phrase: ${this.catchPhrase}</h3>`
    }
}