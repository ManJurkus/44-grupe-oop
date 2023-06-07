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
        this.mileage = 0;
        this.fuelConsumption = 10;  // L/100km
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

    updateMileage(fuelAmount) {
        this.mileage += fuelAmount / this.fuelConsumption * 100;
    }

    currentMileage() {
        return `Rida: ${this.mileage}km.`
    }

    fillTank(amount) {
        if (this.isEngineOn) {
            return 'Nori uzpilti kuro? Sustok!';
        }

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

    drive(amount) {
        if (!this.isEngineOn && this.tankLevel === 0) {
            return 'Uzsipilk kuro!';
        }
        if (!this.isEngineOn) {
            return 'Isijunk varykli!';
        }

        if (amount < this.tankLevel) {
            this.tankLevel -= amount;
            this.updateMileage(amount);

            if (this.tankLevel === 0) {
                this.engineStop();
            }

            return `Nuvaziuota sunaudojant ${amount} litru 🚗`;
        } else {
            const gasLeft = this.tankLevel;
            this.tankLevel = 0;
            this.engineStop();
            this.updateMileage(gasLeft);

            return `Nuvaziuota sunaudojant ${gasLeft} litru 🚗 ir issijunge varyklis.`;
        }
    }
}