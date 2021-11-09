import { Button, Paper, TextField, Typography } from "@mui/material";
import * as React from "react";
import Link from "next/link";
import styles from "./signup.module.css";
import { createUser } from "../../utils/UsersUtil";
export interface SignupProps {}

const Signup = (props: SignupProps) => {
  const handleSubmitSignup = async (event: any) => {
    event.preventDefault();
    const { email, password, passwordConfirm } = event.currentTarget;

    if (
      email.value === "" ||
      password.value === "" ||
      passwordConfirm.value === ""
    ) {
      window.alert("Not enough values to submit form");
    } else {
      const user = {
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value,
      };

      const result = await createUser(user);
      if(result.errorCode !== undefined) {
        window.alert(result.errorMessage);
      }
      else{
        window.alert("Sign up success");
      }
    }
  };

  return (
    <Paper elevation={3} className={styles.signupContainer}>
      <Typography variant="h4">Sign-up</Typography>
      <br />
      <div>
        <form onSubmit={handleSubmitSignup}>
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
          <TextField
            name="passwordConfirm"
            label="Confirm password"
            type="password"
            fullWidth
            className={styles.textBoxMargin}
          ></TextField>
          <div className={styles.endContainer}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={styles.signupBtn}
            >
              Sign-up
            </Button>
            <Link href="/auth/login" passHref>
              Already have account?
            </Link>
          </div>
        </form>
      </div>
    </Paper>
  );
};

export default Signup;
