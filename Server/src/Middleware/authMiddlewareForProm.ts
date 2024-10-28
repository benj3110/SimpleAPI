import { Request } from "express";

export const authMiddlewareForProm = (req: Request) =>{
    const authHeader = req.headers['authorization'];
    if (authHeader === 'mysecrettoken') {
        return true
      } else {
       return false
      }
}