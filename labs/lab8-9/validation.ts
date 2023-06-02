export interface listOfArticles {
    id: number;
    value: string;
}

export interface NewsPaper {
    name: string;
    number: number;
    dateRelease: string;
    numOfPages: number;
    listOfArticles: Array<listOfArticles>;
}

export interface ValidationResult {
    isValid: boolean;
    message?: string;
}

export function nameValidator(newsPaper: NewsPaper): ValidationResult {
    if (
        !newsPaper.name ||
        newsPaper.name.length < 5 ||
        newsPaper.name.length > 50
    ) {
        return {
            isValid: false,
            message: "Назва газети має містити від 5 до 50 символів",
        };
    }
    return { isValid: true };
}

export function numberValidator(newsPaper: NewsPaper): ValidationResult {
    if (isNaN(Number(newsPaper.number))) {
        return {
            isValid: false,
            message: "Номер газети має бути числом",
        };
    }
    if (!newsPaper.number || newsPaper.number < 1 || newsPaper.number > 10000) {
        return {
            isValid: false,
            message: "Номер газети має бути в діапазоні від 1 до 10000",
        };
    }

    return { isValid: true };
}

export function numOfPagesValidator(newsPaper: NewsPaper): ValidationResult {
    if (isNaN(Number(newsPaper.numOfPages))) {
        return {
            isValid: false,
            message: "Кількість сторінок в газеті має бути числом",
        };
    }
    if (
        !newsPaper.numOfPages ||
        newsPaper.numOfPages < 1 ||
        newsPaper.numOfPages > 1000
    ) {
        return {
            isValid: false,
            message:
                "Кількість сторінок газети має бути в діапазоні від 1 до 1000",
        };
    }

    return { isValid: true };
}

export function dateReleaseValidator(newsPaper: NewsPaper): ValidationResult {
    const pattern = /^\d{2}\.\d{2}\.\d{4}$/;

    if (pattern.test(newsPaper.dateRelease)) {
        const parts = newsPaper.dateRelease.split(".");
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);
        if (
            day >= 1 &&
            day <= 31 &&
            month >= 1 &&
            month <= 12 &&
            year >= 1500 &&
            year <= 2023
        ) {
            return { isValid: true };
        } else {
            return {
                isValid: false,
                message: "Значення дати некоректні",
            };
        }
    } else {
        return {
            isValid: false,
            message: "Формат дати має бути dd.mm.yyyy.",
        };
    }
}
export function listOfArticlesValidator(
    newsPaper: NewsPaper
): ValidationResult {
    let valid = true;
    newsPaper.listOfArticles.forEach((element: listOfArticles) => {
        if (
            !element.value ||
            element.value.length < 5 ||
            element.value.length > 50
        ) {
            valid = false;
            return;
        }
    });
    if (valid) {
        return { isValid: true };
    }
    return {
        isValid: false,
        message: "Назва статті має містити від 5 до 50 символів",
    };
}
