import { BaseCustomError } from '~/errors/BaseCustomError';

interface CustomerErrorParams {
    code?: number;
    message?: string;
    logging?: boolean;
    context?: { [key: string]: unknown };
}

export default class CustomError extends BaseCustomError {
    private static readonly _statusCode = 400;
    private readonly _code: number;
    private readonly _logging: boolean;
    private readonly _context: { [key: string]: unknown };

    constructor(params?: CustomerErrorParams) {
        const { code, message, logging } = params || {};

        super(message || 'Ocorreu um erro ao processar a requisição.');

        this._code = code || CustomError._statusCode;
        this._logging = logging || true;
        this._context = params?.context || {};

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    get errors() {
        return [{ message: this.message, context: this._context }];
    }

    get statusCode() {
        return this._code;
    }

    get logging() {
        return this._logging;
    }
}
