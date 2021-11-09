// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { addTaskService, getTasksService } from '../../../services/tasksService';

export default async function tasksHandler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'GET') {
        const tasks = await getTasksService();
        res.status(200).json(tasks);
    }
    else 
    if (req.method === 'POST') {
        const task = req.body;
        const id = await addTaskService(task);
        res.status(200).json(id);
    }
    // else if (req.method === 'PUT') {
    //     const task = req.body;
    //     TasksStore.updateTask(task);
    //     res.status(200).json(task);
    // }
    // else if (req.method === 'DELETE') {
    //     const id = req.body;
    //     TasksStore.deleteTask(id);
    //     res.status(200);
    // }
}
