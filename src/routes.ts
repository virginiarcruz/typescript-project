import { Request, Response } from 'express';
import { CreateUser } from './services/CreateUser'

export function HelloType(request: Request, response: Response) {

  const user = CreateUser({
    name: 'vick',
    email: 'vick@vick.com',
    password: '12312',
    techs: [
      'JS', 
      'React', 
      'Vue',
      { title: 'Angular', experience: 100},
      { title: 'Jquery', experience: 1}
     ]
  })
  return response.json({ message: 'Hello Type'});
}