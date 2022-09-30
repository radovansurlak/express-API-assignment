import { StatusCode } from "./statusCodes";

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Not found') {
    super(message, StatusCode.NotFound);
  }
}
