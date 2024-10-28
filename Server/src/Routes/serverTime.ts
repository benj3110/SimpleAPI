import type { Request, Response } from "express"
import { getServertime } from "../Services/getServertime"
import { validateTime } from "../Middleware/validation"

export const serverTime = async (req:Request, res: Response) =>{
    const time = await getServertime()
    const isValid = validateTime(time)
    if (isValid){
        res.send(time)
    }else {
        res.status(500).json({ error: 'schema error' });
    }
}