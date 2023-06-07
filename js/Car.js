/**
 * Marke, modelis, spalva, kaina, bako talpa.
 * Ar ijungtas varyklis?
 * Rida?
 * Kiek kuro bake?
 */
export class Car {
    constructor(marke, modelis, spalva, kaina, bakoTalpa) {
        this.make = marke;
        this.model = modelis;
        this.color = spalva;
        this.price = kaina;
        this.tankSize = bakoTalpa;
        this.tankLevel = 0;
        this.isEngineOn = false;
    }

    engineStart() {
        if (this.isEngineOn) {
            return 'Varyklis ir taip jau ijungtas! 😬';
        }

        this.isEngineOn = true;
        return 'Ijungiau varykli ✅';
    }

    engineStop() {
        if (!this.isEngineOn) {
            return 'Nelauzyk raktelio! 🔑';
        }

        this.isEngineOn = false;
        return 'Isjungiau varykli ❌';
    }

    fillTank(amount) {
        const emptySpace = this.tankSize - this.tankLevel;
        if (amount <= emptySpace) {
            this.tankLevel += amount;
            return `Pripilta kuro: ${amount} litru. 💧`;
        } else if (emptySpace > 0) {
            this.tankLevel = this.tankSize;
            return `Pripilta kuro: ${emptySpace} litru. 💧`;
        } else {
            return `Kuro bakas yra pilnas 👍`;
        }
    }
}