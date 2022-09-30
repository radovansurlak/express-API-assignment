import { Express, NextFunction, Request, Response } from 'express';
import { AppErrorResponse, NotFoundResponse } from './errorResponse';
import { NotFoundError } from './errors';
import { StatusCode } from '../types/statusCodes';
import { validationErrorHandler } from './validationErrorHandler';
import { notFoundErrorHandler } from './notFoundErrorHandler';

export function loadErrorHandlers(app: Express) {
  app.use(validationErrorHandler);

  app.all('*', notFoundErrorHandler);

  app.use((error: any, request: Request, response: Response, next: NextFunction) => {
    const errorStatusCode = error.statusCode || StatusCode.InternalServerError;

    if (errorStatusCode === StatusCode.NotFound) {
      return response.status(error.statusCode).send(new NotFoundResponse());
    }

    return response
      .status(StatusCode.InternalServerError)
      .send(new AppErrorResponse());
  });
}
