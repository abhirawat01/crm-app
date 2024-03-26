import "../../App.css";
import { useEffect } from "react";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    async function isAuthenticated() {
      if (!localStorage.getItem("x-access-token")) {
        navigate("/");
      } else {
        try {
          const response = await axios.get(
            "http://localhost:3005/isauthentication",
            {
              headers: {
                "x-access-token": localStorage.getItem("x-access-token"),
              },
            }
          );
          console.log(response.data.message);
        } catch (error) {
          console.log("Something Went wrong in the token validation");
          navigate("/");
        }
      }
    }
    isAuthenticated();
  }, []);

  return (
    <>
      <div className="app">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default Dashboard;
