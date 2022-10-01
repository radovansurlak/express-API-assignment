import { Response } from 'express';
import { DataResponse } from './dataResponse';

export function handleDataResponse(
  response: Response,
  data: Record<string, unknown>,
) {
  response.status(200).send(new DataResponse(data));
}