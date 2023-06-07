class Dog {
    constructor(name, color) {
        this.name = name;
        this.furColor = color;
        this.age = 0;
        this.legsCount = 4;
        this.state = 'guli';
    }

    atsistok() {
        this.state = 'stovi';
    }

    gulk() {
        this.state = 'guli';
    }

    gimtadienis() {
        this.age++;
    }
}

export { Dog };