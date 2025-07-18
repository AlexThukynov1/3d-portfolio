
import {styles} from '../styles.js';
import {navLinks} from "../constants/index.js";
import {logo, menu, close} from '../assets'
import {Link} from "react-router-dom";
import {useState} from "react";

const Navbar = () => {
    const [active, setActive] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <p className="text-white text-[18px] flex font-bold cursor-pointer">Adrian&nbsp;<span className="sm:block hidden">|&nbsp;Javascript Mastery</span></p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {
                        navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`${
                                    active === link.title 
                                    ? 'text-white' 
                                    : 'text-secondary'
                                    } hover:text-white text-[18px]
                                    font-medium cursor-pointer`}
                                onClick={() => setActive(link.title)}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={menuOpen ? close : menu}
                        alt="menu toggle"
                        className="w-[25px] h-[25px] object-contain cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />

                    <div className={`${!menuOpen 
                        ? 'hidden' 
                        : 'flex'} 
                        p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {
                                navLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`${
                                            active === link.title
                                                ? 'text-white'
                                                : 'text-secondary'
                                        } font-popins font-medium cursor-pointer text-[16px]`}
                                        onClick={() => {
                                            setMenuOpen(!menuOpen);
                                            setActive(link.title)
                                        }}
                                    >
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
