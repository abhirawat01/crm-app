import { useState } from "react";
import axios from 'axios';

import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

export default function Signup() {
  const [loading,setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((current) => !current);
  const [userDetails, setUserDeatils] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setUserDeatils((prevalue)=>{

      return {
        ...prevalue,
        [name]: value
      }
    })

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3005/signup", userDetails);
      if(response.data.success){
        console.log(response.data);
      }
    } catch (error) {
      console.log("Something went wrong in the sign up process.");
      setLoading(false);
    }
    
  };

  return (
    <>
      <Button className="rounded-full bg-red-400" onClick={handleOpen}>SignUp</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <form onSubmit={handleSubmit}>
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign Up.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input 
                name="email"
                label="Email"
                value={userDetails.email}
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
                value={userDetails.password}
                onChange={handleInput}
                size="lg"
                type="password"
                required
            />
            
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" fullWidth>
                  {!loading ? 'Sign up' : 'Loading...'}
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
                Log in
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
        </form>
      </Dialog>
    </>
  );
}
