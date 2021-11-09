import { Grid } from "@mui/material";
import * as React from "react";
import { Task } from "../../model/Task";
import DoingTasks from "./doingTasks";
import DoneTasks from "./doneTasks";
import NewTasks from "./newTasks";


export interface TasksProps {
  tasks: Task[]
}

const Tasks = (props: TasksProps) => {
  console.log(props.tasks);
  return (
    <Grid container spacing={2}>
      <Grid lg={4} md={4} sm={4} xs={4} item>
        <NewTasks></NewTasks>
      </Grid>
      <Grid lg={4} md={4} sm={4} xs={4} item>
        <DoingTasks></DoingTasks>
      </Grid>
      <Grid lg={4} md={4} sm={4} xs={4} item>
        <DoneTasks></DoneTasks>
      </Grid>
    </Grid>
  );
};

export default Tasks;
