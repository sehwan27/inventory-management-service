import userRepository from "../repositories/user.repository"

export default class UserService {
    constructor() {}

    async createNewUser(payload: any) {
        console.log(payload)
        
        return await userRepository.create(payload)
    }
}