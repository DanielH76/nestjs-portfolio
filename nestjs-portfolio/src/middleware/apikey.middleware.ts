import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { config } from "dotenv";

config()

@Injectable()
export class ApikeyMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction){

        const key: string = req.header("x-api-key")
        const secret: string = process.env.API_KEY

        if(key !== secret){
            res.sendStatus(401)
        } else{
            next()
        }

    }
}