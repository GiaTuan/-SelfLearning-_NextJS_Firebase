import { Paper } from "@mui/material";
import * as React from "react";
import styles from "./tasks.module.css";

export interface NewTasksProps {}

const NewTasks = (props: NewTasksProps) => {
  return <Paper  elevation={3} className={styles.tasksContainer}>
      <div>New Tasks</div>
  </Paper>;
};

export default NewTasks;
