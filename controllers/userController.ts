import { Request, Response } from "express";
import UserService from "../services/userService"
const userService = new UserService()

export const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.createNewUser(req.body)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}