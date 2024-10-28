import { NextFunction, Request, Response } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    const authHeader = req.headers['authorization'];
    if (authHeader === 'mysecrettoken') {
        next();
      } else {
        res.status(403).json({ error: 'Forbidden' });
      }
}