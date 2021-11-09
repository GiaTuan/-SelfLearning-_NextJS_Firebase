// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createUserService } from '../../../services/usersSerivce';

export default async function signupHandler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'POST') {
        const user = req.body;
        try {
            const result = await createUserService(user);
            res.status(200).json(result);
        }
        catch (error: any) {
            var errorCode = error.code;
            var errorMessage = error.message;
            const result = { errorCode, errorMessage }
            res.status(400).json(result);
        };
    }
}
