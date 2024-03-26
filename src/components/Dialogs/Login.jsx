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
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [loading,setLoading] = useState(false);
  const success = () => toast.success("Login Successful." ,{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
  });

  const failed = ()=> toast.error('Incorrect username or password.', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
   });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((current) => !current);

  const [formInput, setformInput] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setformInput((prevalue)=>{

      return {
        ...prevalue,
        [name]: value
      }
    })

  }

  const navigate = useNavigate();

  //This is a function thats make http call to the server and navigate the user to admin page
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3005/authentication", formInput);
      if(response.data.success){
        localStorage.setItem('x-access-token',response.data.token);
        success();
        setTimeout(() => {
          setLoading(false);
          navigate('/dashboard');
        }, 2000);
      }
    } catch (error) {
      // console.log("User Details Mismatched!!");
      failed();
      setLoading(false);
    }
    
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
                  {!loading ? 'Log in' : 'Loading...'}
                </Button>
              <Typography variant="small" className="mt-4 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  
                  as="a"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold cursor-pointer"
                  onClick={success}
                >
                  Sign Up
                </Typography>
              </Typography>
              <div>
                <ToastContainer/>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Dialog>
    </>
  );
}
