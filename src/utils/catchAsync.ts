import { NextFunction, Request, Response } from 'express';

export function catchAsync<ReturnType>(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<ReturnType>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err) => next(err));
  };
}
