import { StatusCode } from '../../types/statusCodes';

interface ErrorResponse {
  status: number;
  message: string;
}

export class AppErrorResponse implements ErrorResponse {
  status: number;

  message: string;

  constructor(message = 'something went wrong') {
    this.status = StatusCode.InternalServerError;
    this.message = message;
  }
}

export class NotFoundResponse implements ErrorResponse {
  status: number;

  message: string;

  constructor(message = 'not found') {
    this.status = StatusCode.NotFound;
    this.message = message;
  }
}

export class UnauthorizedResponse implements ErrorResponse {
  status: number;

  message: string;

  constructor(message = 'unauthorized') {
    this.status = StatusCode.Unauthorized;
    this.message = message;
  }
}

export class BadRequestResponse implements ErrorResponse {
  status: number;

  message: string;

  constructor(message = 'bad request') {
    this.status = StatusCode.BadRequest;
    this.message = message;
  }
}

export class ValidationErrorResponse extends BadRequestResponse {
  constructor(message = 'validation error') {
    super(message);
  }
}
