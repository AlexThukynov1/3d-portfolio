
import {styles} from './styles';
import {navLinks} from "../constants/index.js";
import {logo, menu, close} from '../assets'
import {Link} from "react-router-dom";
import {useState} from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    return (
        <nav className={`
            ${ styles.paddingX } w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("")
                        window.scrollTo(0, 0)
                    }}
                >
                    <img src={logo} alt="Logo" className="w-9 h-9 object-contain"/>
                    <p className="text-white text-[18px] font-bold cursor-pointer">Adrian <span className="sm:block hidden">| Javascript Mastery</span></p>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
