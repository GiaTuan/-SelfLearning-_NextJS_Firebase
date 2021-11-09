import clsx from "clsx";
import * as React from "react";
import Link from "next/link";
import { Button, Paper } from "@mui/material";
import { Task } from "../../../model/Task";
import ListTasks from "../listTasksComponent";
import styles from "../tasks.module.css";
import newTaskStyles from "./newTasks.module.css";

export interface NewTasksProps {}

const NewTasks = (props: NewTasksProps) => {
  const tasks: Task[] = [];
  return (
    <Paper elevation={3} className={styles.tasksContainer}>
      <div
        className={clsx(styles.taskHeader, newTaskStyles.newTaskHeaderColor)}
      >
        New Tasks
      </div>
      <ListTasks tasks={tasks}></ListTasks>
      <Link href="/tasks/newTask" passHref>
        <Button variant="contained" color="secondary">
          Add new task
        </Button>
      </Link>
    </Paper>
  );
};

export default NewTasks;
