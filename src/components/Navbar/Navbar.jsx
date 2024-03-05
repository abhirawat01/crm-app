import Login from '../Dialogs/Login';
import Signup from '../Dialogs/Signup';
function Navbar(){
    return (
            <div className="bg-[#3F4041] max-w-[1240px] rounded-full py-[20px] px-[40px] items-center flex justify-between mx-auto">
                <div className="font-bold text-2xl text-white">
                    Pheonix
                </div>

                <ul className="hidden md:flex items-center text-white gap-5">
                    <li className="hover:text-[#FFD1E3] cursor-pointer" >About Us</li>
                    <li className="hover:text-[#FFD1E3] cursor-pointer">Contact</li>
                    <Signup/>
                    <Login/>
                </ul>
            </div>
    )
}

export default Navbar;