import { Express, NextFunction, Request, Response } from 'express';
import { AppErrorResponse, NotFoundResponse } from './errorResponse';
import { NotFoundError } from './errors';
import { StatusCode } from './statusCodes';
import { validationErrorHandler } from './validationErrorHandler';

export function loadErrorHandlers(app: Express) {
  app.use(validationErrorHandler);

  app.all('*', (request: Request, response: Response, next: NextFunction) => {
    next(new NotFoundError(`${request.originalUrl} not found`));
  });

  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    const errorStatusCode = error.statusCode || StatusCode.InternalServerError;

    if (errorStatusCode === StatusCode.NotFound) {
      return res.status(error.statusCode).send(new NotFoundResponse());
    }

    return res
      .status(StatusCode.InternalServerError)
      .send(new AppErrorResponse());
  });
}
