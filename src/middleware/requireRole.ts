import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import { UserRole } from '../interfaces/User';
import { AuthenticationService } from '../services/authenticationService';
import { catchAsync } from '../utils/catchAsync';
import { UnauthorizedError } from '../utils/error/errors';

function getAuthorizationToken(req: Request) {}


export function requireRole(roles: UserRole[]) {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith('Bearer')
    ) {
      throw new UnauthorizedError();
    }

    const authenticationService = Container.get(AuthenticationService);
    const token = req.headers.authorization.split(' ')[1];
    const parsedToken = authenticationService.verifyToken(token);

    if (typeof parsedToken === 'string') {
      throw new UnauthorizedError();
    }

    const userRole = parsedToken.role;

    if (!roles.includes(userRole)) {
      throw new UnauthorizedError();
    }

    next();
  });
}
