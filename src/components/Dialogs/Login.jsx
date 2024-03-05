import { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
// import { redirect } from "react-router-dom";
// import CustomRoutes from "../../routes/CustomRoutes";

export default function Login() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((current) => !current);

  const [formInput, setformInput] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setformInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formdata = JSON.stringify(formInput);

    axios.post("http://localhost:3005/authentication", formInput)
      .then((response) => {
        console.log(response.data);
        
        if (response.data.success) {
          console.log("inside success")
        }
        else{
          console.log('User Deatils Mismatched');
        }
        setformInput({ email: "", password: "" });
        
      });
  };

  return (
    <>
      <Button className="rounded-full bg-blue-800" onClick={handleOpen}>
        Log in
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <form action="" onSubmit={handleSubmit}>
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Log in
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your email and password to Login.
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Your Email
              </Typography>
              <Input
                name="email"
                label="Email"
                value={formInput.email}
                autoComplete="off"
                onChange={handleInput}
                size="lg"
                type="email"
                required
              />
              <Typography className="-mb-2" variant="h6">
                Your Password
              </Typography>
              <Input
                label="Password"
                name="password"
                autoComplete="off"
                value={formInput.password}
                onChange={handleInput}
                size="lg"
                type="password"
                required
              />
              <div className="-ml-2.5 -mt-3">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button type="submit" variant="gradient" fullWidth>
                  log in
                </Button>
              <Typography variant="small" className="mt-4 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                  onClick={handleOpen}
                >
                  Sign Up
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </form>
      </Dialog>
    </>
  );
}
