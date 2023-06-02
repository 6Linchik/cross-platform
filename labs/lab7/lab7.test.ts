import log from "./log";
import recursion from "./recursion";
import tabX from "./tabX";
import series from "./series";
import tabY from "./tabY";

describe("log", () => {
    test("should log the provided array", () => {
        const spy = jest.spyOn(console, "log");
        log([1, 2, 3]);
        expect(spy).toHaveBeenCalledWith([1, 2, 3]);
        spy.mockRestore();
    });
});

describe("recursion", () => {
    test("should return the correct result for the recursion function", () => {
        const arrX = [1, 2, 3];
        const expectedResult = [0.84, 0.91, 0.14];
        expect(recursion(arrX)).toEqual(expectedResult);
    });
});

describe("series", () => {
    test("should return the correct result for the series function", () => {
        const arrX = [1, 2, 3];
        const expectedResult = [0.84, 0.91, 0.14];
        expect(series(arrX)).toEqual(expectedResult);
    });
});

describe("tabX", () => {
    test("should return the correct array of X values", () => {
        const min = 1;
        const max = 5;
        const step = 1;
        const expectedResult = [1.0, 2.0, 3.0, 4.0, 5.0];
        expect(tabX(min, max, step)).toEqual(expectedResult);
    });
});

describe("tabY", () => {
    test("should return the correct array of Y values", () => {
        const arrX = [0, Math.PI / 2, Math.PI];
        const expectedResult = [0.0, 1.0, 0.0];
        expect(tabY(arrX)).toEqual(expectedResult);
    });
});
