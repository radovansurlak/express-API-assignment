import { Express, NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../types/statusCodes';
import {
  AppErrorResponse,
  NotFoundResponse,
  UnauthorizedResponse,
} from './errorResponse';
import { NotFoundError, UnauthorizedError } from './errors';
import { notFoundErrorHandler } from './notFoundErrorHandler';
import { validationErrorHandler } from './validationErrorHandler';

export function loadErrorHandlers(app: Express) {
  app.use(validationErrorHandler);

  app.all('*', notFoundErrorHandler);

  app.use(
    (error: any, request: Request, response: Response, next: NextFunction) => {
      if (error instanceof UnauthorizedError) {
        return response
          .status(error.statusCode)
          .send(new UnauthorizedResponse(error.message));
      }

      if (error instanceof NotFoundError) {
        return response.status(error.statusCode).send(new NotFoundResponse());
      }

      return response
        .status(StatusCode.InternalServerError)
        .send(new AppErrorResponse());
    },
  );
}
