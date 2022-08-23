import 'reflect-metadata'
import { logParameter, logMethod } from './decorators';

 
class Warrior {

    #firstName: string
    #lastName: string

    constructor(firstName: string, @logParameter lastName: string) {
        this.#firstName = firstName
        this.#lastName = lastName
    }

    setFirstName(@logParameter name: string){
        this.#firstName = name
    }

    setLastName(@logParameter name: string){
        this.#lastName = name
    }

    //@logMethod
    about(): string{
        return `${this.#firstName} ${this.#lastName}`
    }
}

const warrior = new Warrior('Алёша', 'Попович')

warrior.setFirstName('Добрыня')
warrior.setLastName('Никитич')
warrior.about()