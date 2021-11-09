import { Divider, List, ListItem, ListItemText } from "@mui/material";
import * as React from "react";
import { Task } from "../../../model/Task";
import { TaskStatus } from "../../../model/TaskStatus";
import styles from "../tasks.module.css";

export interface ListTasksProps {
  tasks: Task[];
}

const ListTasks = ({ tasks }: ListTasksProps) => {
  console.log(tasks);
  return (
    <List>
      {tasks.map((value, key) => (
        // eslint-disable-next-line react/jsx-key
        <>
          <ListItem>
            <ListItemText primary={value.name} />
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
};

export default ListTasks;
