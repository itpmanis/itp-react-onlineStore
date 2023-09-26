import { Link, NavLink } from "react-router-dom";
import logo2 from "../../assets/logo2.png"

const Header=()=>{
    return(
        <>
        <header className="bg-slate-400 shadow-md sticky top-0 z-50">
            <div className="flex flex-row justify-between items-center">
                <Link to="/" >
                    <img src={logo2}  alt="logo" className="h-12 mr-3 bg-orange-100" />
                </Link>

                <div >
                    <ul className="flex flex-row gap-4">
                        <li>
                            <NavLink to="/"className={({isActive})=> `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive})=> `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({isActive})=> `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-row ">
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                </div>
            </div>


        </header>
        </>
    )
}
export default Header;