import Navbar from "../Navbar/Navbar";

function WelcomeScreen() {
  return (
    <>
    <div className="bg-cover bg-center w-full p-[20px] h-screen bg-[url('/Images/Welcome.jpg')]">
      <Navbar />
      <div className="mx-auto gap-3 mt-60 flex justify-center items-center flex-col max-w-[650px]">
        <h1 className="text-5xl text-[#FFD1E3] font-bold">
          Welcome to CRM Project.
        </h1>
        <p className=" text-center text-white font-bold">
          "Constructing Success: Revolutionize Project Management with Our CRM.
          Seamless Integration,Efficient Collaboration, Endless Possibilities."
        </p>
        <button className="bg-[#A367B1] hover:bg-[#87628F] text-white font-bold max-w-[10rem] py-2 px-4 rounded-full">
          learn more
        </button>
      </div>
    </div>
    </>
  );
}

export default WelcomeScreen;
