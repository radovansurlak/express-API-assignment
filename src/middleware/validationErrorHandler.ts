import { Request, Response, NextFunction } from 'express';
import { isCelebrateError } from 'celebrate';

export function validationErrorHandler(
  error: any,
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

    return res.status(400).json({
      error: message,
    });
  }

  return res.status(500).send(error);
}
