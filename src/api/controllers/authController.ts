import Container from 'typedi';
import { Request, Response } from 'express';
import { LoginDTO } from '../../interfaces/Authentication';
import { AuthenticationService } from '../../services/authenticationService';
import { catchAsyncMethod } from '../../utils/catchAsync';
import { handleDataResponse } from '../../utils/handleDataResponse';

class AuthController {
  @catchAsyncMethod
  async login(request: Request, response: Response) {
    const loginDTO: LoginDTO = request.body;

    const authenticationService = Container.get(AuthenticationService);

    const authToken = await authenticationService.login(loginDTO);

    handleDataResponse(response, { authToken });
  }
}

export default new AuthController();
