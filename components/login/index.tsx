import { Button, Paper, TextField, Typography } from "@mui/material";
import * as React from "react";
import Link from "next/link";
import styles from "./login.module.css";
export interface LoginProps {}

const Login = (props: LoginProps) => {
  return (
    <Paper elevation={3} className={styles.signupContainer}>
      <Typography variant="h4">Log in</Typography>
      <br/>
      <div>
        <form>
          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            className={styles.textBoxMargin}
          ></TextField>
          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            className={styles.textBoxMargin}
          ></TextField>
          <div className={styles.endContainer}>
            <Button
              variant="contained"
              color="secondary"
              className={styles.signupBtn}
            >
              Log in
            </Button>
            <Link href="/auth/signup" passHref>
              Create new account
            </Link>
          </div>
        </form>
      </div>
    </Paper>
  );
};

export default Login;
