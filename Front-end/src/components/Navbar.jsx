import { useContext, useState } from "react"
import {assets} from "../assets/frontend_assets/assets"
import { Link, NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ShopContext } from "../context/ShopContext"

const Navbar = () => {

    const[Visible,SetVisible] = useState(false);

    const {setShowSearch, getCartCount} = useContext(ShopContext);

    // Add animation variants
    const sidebarVariants = {
        open: { width: "100%", transition: { duration: 0.3 } },
        closed: { width: 0, transition: { duration: 0.3 } }
    };

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
    };

  return (
    <div className="flex items-center justify-between py-5 font-medium">

        <Link to={"/"}> <img src={assets.logo} className="w-36" alt="logo" /></Link>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink to ={"/"} className="flex flex-col items-center gap-1">
                <p>Home</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
            </NavLink>
            <NavLink to ={"/collections"} className="flex flex-col items-center gap-1">
                <p>Collections</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
            </NavLink>
            <NavLink to ={"/about"} className="flex flex-col items-center gap-1">
                <p>About</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
            </NavLink>
            <NavLink to ={"/contact"} className="flex flex-col items-center gap-1">
                <p>Contact</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
            </NavLink>
        </ul>

        <div className="flex items-center gap-6 ">
            <img onClick={() =>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

            <div className="group relative">
                <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="" />

                <AnimatePresence>
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={dropdownVariants}
                        className="group-hover:block hidden absolute dropdown-menu right-0 pt-4"
                    >
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black"> Orders </p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <Link to = "/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5:" alt="cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
            </Link>

            <img onClick={()=> SetVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />
        </div>
        {/* Side Bar for small window */}

        <motion.div 
            initial="closed"
            animate={Visible ? "open" : "closed"}
            variants={sidebarVariants}
            className="absolute top-0 right-0 bottom-0 overflow-hidden bg-white"
        >
            <div className="flex flex-col text-gray-500">
                <div onClick={() => SetVisible(false)} className="flex items-center gap-4 p-3">
                    <img  className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=> SetVisible(false)} className={"py-2 pl-6 border"} to = "/">
                Home
                </NavLink>
                <NavLink onClick={()=> SetVisible(false)} className={"py-2 pl-6 border"} to = "/collections">
                Collections
                </NavLink>
                <NavLink onClick={() => SetVisible(false)} className={"py-2 pl-6 border"} to = "/about">
                About
                </NavLink>
                <NavLink onClick={()=> SetVisible(false)} className={"py-2 pl-6 border"} to = "/contact">
                Contact
                </NavLink>
            </div>
        </motion.div>

    </div>
  )
}

export default Navbar