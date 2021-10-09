import dotenv from 'dotenv'
import {verify} from 'jsonwebtoken'
import {Request,Response,NextFunction} from 'express'

// configration
dotenv.config();

async function verifyToken(req:Request,res:Response,next:NextFunction)
{
	const token = req.body.token || req.query.token || req.headers["x-access-token"]

	if (!token) {
		return res.status(403).send("A token is required for authentication");
	}
 try {
    const decoded = verify(token, process.env.TOKEN_KEY);
    res.locals.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
	return next();
}

export default verifyToken;
