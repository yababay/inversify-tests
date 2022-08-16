class Warrior {

    #name: string;
    #age: number;
    
    standartWeapon: string;

    #secretWeapon: string;
    #isRenamed: boolean = false;

    constructor(name: string, age: number, secretWeapon: string, standartWeapon: string = "кинжал") {
        this.#name = name;
        this.#age = age;
        this.#secretWeapon = secretWeapon;
        this.standartWeapon = standartWeapon;
    }

    get age() : string { 
        const rest = this.#age % 10;
        let postfix: string;
        switch(rest){
            case 1:
                postfix = "год";
                break;
            case 2:
            case 3:
            case 4:
                postfix = "года";
                break;
            default:
                postfix = "лет";
        }
        return `${this.#age} ${postfix}`; 
    }

    get name() { return this.#name; }

    set name(update: string) { 
        this.#isRenamed = true;
        this.#name = `${update}-сан`; 
    }

    get power() : number {
        return Math.round(this.#age * (1 + Math.random()) * 100) / 100;
    }

    about() {
        const prefix: string = this.#isRenamed ? "Теперь меня зовут" : "Меня зовут";
        return `${prefix} ${this.#name}. Мне ${this.age}. У меня ${this.standartWeapon} и ${this.#secretWeapon}. Моя сила сейчас - ${this.power}.`;
    }
}

export default Warrior

