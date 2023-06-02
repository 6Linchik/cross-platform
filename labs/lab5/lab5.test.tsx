import {
    QuadraticPolynomial,
    CubicPolynomial,
} from "../../classes/lab4-5/index";

describe("QuadraticPolynomial", () => {
    const quadratic = new QuadraticPolynomial("Quadratic", 2, 1, 2, 1);

    it("should calculate the quadratic polynomial correctly", () => {
        expect(quadratic.calculate()).toBe(9);
    });

    it("should have the correct name", () => {
        expect(quadratic.name).toBe("Quadratic");
    });

    it("should have the correct coefficients", () => {
        expect(quadratic.x).toBe(2);
        expect(quadratic.coefficientA).toBe(1);
        expect(quadratic.coefficientB).toBe(2);
        expect(quadratic.coefficientC).toBe(1);
    });
});

describe("CubicPolynomial", () => {
    const cubic = new CubicPolynomial("Cubic", 3, 1, 2, 3, 4);

    it("should calculate the cubic polynomial correctly", () => {
        expect(cubic.calculate()).toBe(58);
    });

    it("should have the correct name", () => {
        expect(cubic.name).toBe("Cubic");
    });

    it("should have the correct coefficients", () => {
        expect(cubic.x).toBe(3);
        expect(cubic.coefficientA).toBe(1);
        expect(cubic.coefficientB).toBe(2);
        expect(cubic.coefficientC).toBe(3);
        expect(cubic.coefficientD).toBe(4);
    });
});
