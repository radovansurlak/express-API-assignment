import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from './errors';

export function notFoundErrorHandler(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  next(new NotFoundError(`${request.originalUrl} not found`));
}
