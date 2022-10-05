import { Response } from 'express';
import { StatusCode } from '../types/statusCodes';
import { DataResponse } from './dataResponse';

export function handleDataResponse(
  response: Response,
  data: Record<string, unknown>,
) {
  response.status(StatusCode.Success).send(new DataResponse(data));
}
