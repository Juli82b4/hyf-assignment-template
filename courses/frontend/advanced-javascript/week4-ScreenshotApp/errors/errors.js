export class AppError extends Error {
    constructor(message) {
        super(message);
    }

    toUserMessage() {
        return this.message;
    }
}

export class ValidationError extends AppError {
    constructor(message = "Invalid input") {
        super(message);
    }
}

export class ApiError extends AppError {
    constructor(message = "API error") {
        super(message);
    }
}