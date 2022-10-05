import { NextFunction, Request, Response } from 'express';

export function catchAsync<ReturnType>(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<ReturnType>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err) => next(err));
  };
}

export const catchAsyncMethod = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) => {
  // Save a reference to the original method
  const originalMethod = descriptor.value;

  return Object.assign(descriptor, {
    value: (req: Request, res: Response, next: NextFunction) =>
      originalMethod(req, res).catch((err: Error | any) => next(err)),
  });
};
