import { Firestore } from "../firebase/firebase";
import { Task } from "../model/Task";
import { CollectionsConstant } from "../shared/constants/collections";

export const addTaskService = async (task: Task) => {
    const { id } = await Firestore()
        .collection(CollectionsConstant.tasks)
        .add({
            title: task.title,
            content: task.content,
            status: task.status,
            createdOn: Firestore.Timestamp.now(),
        });
    return id;
}

export const getTasksService = async () => {
    const tasks = await Firestore()
        .collection(CollectionsConstant.tasks).get();
    const result = tasks.docs.map(doc => {
        const data = doc.data();
        data.createdOn = data.createdOn.toMillis();
        return {
            id: doc.id,
            data
        }
    })
    return result;
}