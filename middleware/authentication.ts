import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("Missing token");
    const token = authorization.split(" ")[1];
    jwt.verify(token, "secretKey", (err: any, decoded: any) => {
      if (err) return res.status(401).send("Unauthorized");
      next();
    });
  } catch (error) {
    console.log(error)
    res.status(401).send("Unauthorized");
  }
};
