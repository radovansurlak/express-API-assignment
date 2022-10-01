import { Request, Response, NextFunction } from 'express';
import { isCelebrateError } from 'celebrate';
import { StatusCode } from '../../types/statusCodes';
import { ValidationErrorResponse } from './errorResponse';

// eslint-disable-next-line consistent-return
export function validationErrorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (isCelebrateError(error)) {
    const errorBody = error.details.get('body')!;
    const {
      details: [errorDetails],
    } = errorBody;

    const { message } = errorDetails;

    return res
      .status(StatusCode.BadRequest)
      .send(new ValidationErrorResponse(message));
  }

  next(error);
}
