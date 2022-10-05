/* eslint-disable no-underscore-dangle */
import { Service } from 'typedi';
import jwt from 'jsonwebtoken';
import { LoginDTO } from '../interfaces/Authentication';
import { UserModel } from '../models/User';
import { UserRole } from '../interfaces/User';
import { UnauthorizedError } from '../utils/error/errors';
import { appConfig } from '../config';

@Service()
export class AuthenticationService {
  async login(loginDTO: LoginDTO): Promise<string> {
    const user = await UserModel.findOne(loginDTO);

    if (!user) {
      throw new UnauthorizedError('wrong email or password');
    }

    const authToken = this.createToken({
      userId: user._id.toString(),
      role: user.role,
    });

    return authToken;
  }

  createToken({ userId, role }: { userId: string; role: UserRole }) {
    return jwt.sign({ userId, role }, appConfig.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }

  verifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET!);
  }
}
