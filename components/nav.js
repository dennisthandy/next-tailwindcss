import { useState } from "react"
import Drawer from "./Drawer"

function Nav() {

    const [toggleLanguage, setToggleLanguage] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    // const screenSize = useWindow(process.env.sm)

    const handleToggleLanguage = (e) => {
        e.preventDefault()
        setToggleLanguage(prevState => !prevState)
    }

    const handleToggleMenu = (e) => {
        e.preventDefault()
        setToggleMenu(prevState => !prevState)
    }

    return (
        <nav>
            {/* top nav */}
            <div className="flex items-center justify-between bg-yale-blue text-white font-thin py-2 px-5">
                <button className="md:hidden text-white font-thin" onClick={handleToggleMenu}>
                    MENU
                </button>
                <ul className="md:text-sm relative flex gap-5 text-right md:mx-auto md:w-11/12 justify-end align-center">
                    <li><a href="">Login</a></li>
                    <li><a href="">FAQ</a></li>
                    <li
                        className="md:ml-10 flex gap-2 align-center justify-center cursor-pointer self-end"
                        onClick={handleToggleLanguage}

                    >
                        <img src="/ind-lang.svg" alt="lang" className="rounded-full border w-6 h-6"/>
                        <a href="">IDN</a>
                        <img src="/icons/keyboard_arrow_down.png" alt="arrow" className="h-6 w-6 rotate-45"/>

                    </li>

                    {toggleLanguage &&
                        // dropdown language
                        <li className="flex flex-col gap-3 absolute bg-white p-1 rounded text-black top-9 -right-3 md:-right-3">
                            <a href="" className="flex gap-2 p-1 items-center cursor-pointer rounded hover:bg-sky-blue">
                                <img src="/ind-lang.svg" alt="ind-lang" className="rounded-full border border-black"/>
                                <span className="text-sm">Indonesia</span>
                            </a>
                            <a href="" className="flex gap-2 p-1 items-center cursor-pointer rounded hover:bg-sky-blue">
                                <img src="/ing-lang.png" alt="ing-lang" className="rounded-full border border-black"/>
                                <span className="text-sm">Inggris</span>
                            </a>
                        </li>
                    }
                </ul>
            </div>
            
            {/* bottom nav */}
            <div className="bg-french-blue md:py-5">
                <div className="hidden mx-auto md:w-11/12 md:flex justify-between items-start text-white text-xs sm:text-normal">
                    <div className="md:mr-10 lg:mr-40">
                        <img src="/netmonk-logo-white.svg" alt="logo" className="w-24"/>
                    </div>
                    <div>
                        <ul className="flex md:gap-3 lg:gap-6">
                            <li>
                                <a href="">Beranda</a>
                                <img src="/icons/minus.png" alt=""/>
                            </li>
                            <li><a href="">Produk & Solusi</a></li>
                            <li><a href="">Tentang Kami</a></li>
                            <li><a href="">Blog & Event</a></li>
                            <li><a href="">Kontak</a></li>
                        </ul>
                    </div>
                    <div className="flex gap-3">
                        <button className="border rounded-lg py-1 px-3 hover:bg-white hover:text-black">Demo</button>
                        <button className="text-black rounded-lg bg-white py-1 px-5 shadow-lg">Coba Gratis</button>
                    </div>
                </div>
                {toggleMenu && 
                    <Drawer open={toggleMenu}/>
                }
            </div>
        </nav>
    )
}

export default Nav
