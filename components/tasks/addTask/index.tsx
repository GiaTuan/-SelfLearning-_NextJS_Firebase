import {
  Breadcrumbs,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { Task } from "../../../model/Task";
import { addTask } from "../../../utils/TasksUtil";
import styles from "../tasks.module.css";
import addTaskStyles from "./addTasks.module.css";

export interface AddTasksProps {}

//const fetcher = url :string => fetch(url, {method: "POST",body: })

const AddTask = (props: AddTasksProps) => {
  const handleSubmitAddTask = async (event: any) => {
    event.preventDefault();
    const { title, content, status } = event.currentTarget;
    if (title.value === "" || content.value === "" || status.value === "") {
      window.alert("Not enough values to submit form");
    } else {
      const task: Task = new Task(title.value, content.value, status.value);
      const result = await addTask(task);
      if (result) {
        window.alert("Add task success");
      }
    }
  };

  return (
    <Paper elevation={3} className={styles.tasksContainer}>
      <Breadcrumbs>
        <Link href="/tasks" passHref>
          Tasks
        </Link>
        <Typography color="text.primary">Add</Typography>
      </Breadcrumbs>
      <Typography variant="h4">Add new task</Typography>
      <div className={addTaskStyles.addTaskFormContainer}>
        <form onSubmit={handleSubmitAddTask}>
          <TextField
            name="title"
            label="Task title"
            className={addTaskStyles.textBoxMargin}
            fullWidth
          />
          <TextField
            name="content"
            label="Task content"
            className={addTaskStyles.textBoxMargin}
            rows={4}
            multiline
            fullWidth
          />

          <div className={addTaskStyles.textBoxMargin}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Status</FormLabel>
              <RadioGroup row name="status">
                <FormControlLabel value={0} control={<Radio />} label="New" />
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="In-Progress"
                />
                <FormControlLabel value={22} control={<Radio />} label="Done" />
              </RadioGroup>
            </FormControl>
          </div>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={addTaskStyles.addTaskBtn}
          >
            Add task
          </Button>
        </form>
      </div>
    </Paper>
  );
};

export default AddTask;
