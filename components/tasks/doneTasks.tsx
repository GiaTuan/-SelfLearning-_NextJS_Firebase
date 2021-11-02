import { Paper } from "@mui/material";
import * as React from "react";
import styles from "./tasks.module.css";

export interface DoneTasksProps {}

const DoneTasks = (props: DoneTasksProps) => {
  return (
    <Paper elevation={3} className={styles.tasksContainer}>
      {" "}
      <div>Done Tasks</div>
    </Paper>
  );
};

export default DoneTasks;
