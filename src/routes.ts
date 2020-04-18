import { Request, Response } from 'express';

export function HelloType(request: Request, response: Response) {
  return response.json({ message: 'Hello Type'});
}