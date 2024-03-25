class AuthController {

    getLanding = async (req: Request , res: Response ) =>{
        return 'landing';
    }

    getHello = async (req: Request, res: Response)=>{
        return "hello!!!"
    }
}

export default new AuthController();