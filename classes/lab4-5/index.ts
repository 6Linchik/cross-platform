export abstract class Polynomial {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract calculate(): number;
}

export class QuadraticPolynomial extends Polynomial {
    public x: number;
    public coefficientA: number;
    public coefficientB: number;
    public coefficientC: number;

    constructor(
        name: string,
        x: number,
        coefficientA: number,
        coefficientB: number,
        coefficientC: number
    ) {
        super(name);
        this.x = x;
        this.coefficientA = coefficientA;
        this.coefficientB = coefficientB;
        this.coefficientC = coefficientC;
    }

    calculate(): number {
        return (
            this.coefficientA * this.x * this.x +
            this.coefficientB * this.x +
            this.coefficientC
        );
    }
}

export class CubicPolynomial extends Polynomial {
    public x: number;
    public coefficientA: number;
    public coefficientB: number;
    public coefficientC: number;
    public coefficientD: number;

    constructor(
        name: string,
        x: number,
        coefficientA: number,
        coefficientB: number,
        coefficientC: number,
        coefficientD: number
    ) {
        super(name);
        this.x = x;
        this.coefficientA = coefficientA;
        this.coefficientB = coefficientB;
        this.coefficientC = coefficientC;
        this.coefficientD = coefficientD;
    }

    calculate(): number {
        return (
            this.coefficientA * this.x * this.x * this.x +
            this.coefficientB * this.x * this.x +
            this.coefficientC * this.x +
            this.coefficientD
        );
    }
}
