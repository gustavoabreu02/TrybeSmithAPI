import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  loginService = new LoginService();

  async login(req: Request, res: Response) {
    const { code, message } = await this.loginService.createToken(req.body);
    if (code) {
      return res.status(code).json({ message });
    }

    res.status(200).json(message);
  }
}