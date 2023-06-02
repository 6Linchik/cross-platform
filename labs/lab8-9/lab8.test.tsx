import {
    NewsPaper,
    ValidationResult,
    nameValidator,
    numberValidator,
    numOfPagesValidator,
    dateReleaseValidator,
    listOfArticlesValidator,
} from "./validation";

describe("nameValidator", () => {
    test("should return valid result for a valid name", () => {
        const newsPaper: NewsPaper = {
            name: "Valid Name",
            number: 123,
            dateRelease: "01.01.2023",
            numOfPages: 10,
            listOfArticles: [],
        };

        const result: ValidationResult = nameValidator(newsPaper);

        expect(result.isValid).toBe(true);
        expect(result.message).toBeUndefined();
    });
});
describe("numberValidator", () => {
    test("should return invalid result for a number less than 1", () => {
        const newsPaper: NewsPaper = {
            name: "Valid Name",
            number: 0,
            dateRelease: "01.01.2023",
            numOfPages: 10,
            listOfArticles: [],
        };

        const result: ValidationResult = numberValidator(newsPaper);

        expect(result.isValid).toBe(false);
        expect(result.message).toBe(
            "Номер газети має бути в діапазоні від 1 до 10000"
        );
    });

    test("should return invalid result for a number greater than 10000", () => {
        const newsPaper: NewsPaper = {
            name: "Valid Name",
            number: 20000,
            dateRelease: "01.01.2023",
            numOfPages: 10,
            listOfArticles: [],
        };

        const result: ValidationResult = numberValidator(newsPaper);

        expect(result.isValid).toBe(false);
        expect(result.message).toBe(
            "Номер газети має бути в діапазоні від 1 до 10000"
        );
    });
});

describe("numOfPagesValidator", () => {
    test("should return valid result for a valid number of pages", () => {
        const newsPaper: NewsPaper = {
            name: "Valid Name",
            number: 123,
            dateRelease: "01.01.2023",
            numOfPages: 10,
            listOfArticles: [],
        };

        const result: ValidationResult = numOfPagesValidator(newsPaper);

        expect(result.isValid).toBe(true);
        expect(result.message).toBeUndefined();
    });

    test("should return invalid result for a number of pages less than 1", () => {
        const newsPaper: NewsPaper = {
            name: "Valid Name",
            number: 123,
            dateRelease: "01.01.2023",
            numOfPages: 0,
            listOfArticles: [],
        };

        const result: ValidationResult = numOfPagesValidator(newsPaper);

        expect(result.isValid).toBe(false);
        expect(result.message).toBe(
            "Кількість сторінок газети має бути в діапазоні від 1 до 1000"
        );
    });

    test("should return invalid result for a number of pages greater than 1000", () => {
        const newsPaper: NewsPaper = {
            name: "Valid Name",
            number: 123,
            dateRelease: "01.01.2023",
            numOfPages: 2000,
            listOfArticles: [],
        };

        const result: ValidationResult = numOfPagesValidator(newsPaper);

        expect(result.isValid).toBe(false);
        expect(result.message).toBe(
            "Кількість сторінок газети має бути в діапазоні від 1 до 1000"
        );
    });
});

describe("dateReleaseValidator", () => {
    test("should return invalid result for a date release with invalid format", () => {
        const newsPaper: NewsPaper = {
            name: "Valid Name",
            number: 123,
            dateRelease: "2023-01-01",
            numOfPages: 10,
            listOfArticles: [],
        };

        const result: ValidationResult = dateReleaseValidator(newsPaper);

        expect(result.isValid).toBe(false);
        expect(result.message).toBe("Формат дати має бути dd.mm.yyyy.");
    });

    test("should return invalid result for a date release with invalid day", () => {
        const newsPaper: NewsPaper = {
            name: "Valid Name",
            number: 123,
            dateRelease: "32.01.2023",
            numOfPages: 10,
            listOfArticles: [],
        };

        const result: ValidationResult = dateReleaseValidator(newsPaper);

        expect(result.isValid).toBe(false);
        expect(result.message).toBe("Значення дати некоректні");
    });
});

describe("listOfArticlesValidator", () => {
    test("should return valid result for a valid list of articles", () => {
        const newsPaper: NewsPaper = {
            name: "Valid Name",
            number: 123,
            dateRelease: "01.01.2023",
            numOfPages: 10,
            listOfArticles: [
                { id: 1, value: "Article 1" },
                { id: 2, value: "Article 2" },
                { id: 3, value: "Article 3" },
            ],
        };

        const result: ValidationResult = listOfArticlesValidator(newsPaper);

        expect(result.isValid).toBe(true);
        expect(result.message).toBeUndefined();
    });

    test("should return invalid result for a list of articles with empty values", () => {
        const newsPaper: NewsPaper = {
            name: "Valid Name",
            number: 123,
            dateRelease: "01.01.2023",
            numOfPages: 10,
            listOfArticles: [
                { id: 1, value: "" },
                { id: 2, value: "Article 2" },
                { id: 3, value: "Article 3" },
            ],
        };

        const result: ValidationResult = listOfArticlesValidator(newsPaper);

        expect(result.isValid).toBe(false);
        expect(result.message).toBe(
            "Назва статті має містити від 5 до 50 символів"
        );
    });
});
