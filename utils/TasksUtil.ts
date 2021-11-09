import { Task } from "../model/Task"
import { CollectionsConstant } from "../shared/constants/collections"
import API_URL from "../shared/constants/url";

const addTask = async (task: Task) => {
    try {
        const response = await fetch(API_URL.tasks, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });
        if(response.ok)
        {
            return true;
        }
        return false;
    } catch (err) {
        console.log(err);
    }
}

export { addTask }