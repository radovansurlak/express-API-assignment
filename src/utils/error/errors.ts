import { StatusCode } from '../../types/statusCodes';

export class AppError extends Error {
  statusCode: number;

  constructor(message?: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Not found') {
    super(message, StatusCode.NotFound);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, StatusCode.Unauthorized);
  }
}
