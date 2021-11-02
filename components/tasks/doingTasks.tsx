import { Paper } from "@mui/material";
import * as React from "react";
import styles from "./tasks.module.css";
export interface DoingTasksProps {}

const DoingTasks = (props: DoingTasksProps) => {
  return (
    <Paper elevation={3} className={styles.tasksContainer}>
      {" "}
      <div>In-Progress Tasks</div>
    </Paper>
  );
};

export default DoingTasks;
