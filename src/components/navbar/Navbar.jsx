import { useState } from "react"
import logo from "../../assets/logo.svg"
import { AlignJustifyIcon, X } from "lucide-react"

import "./navbar.css"

const Navbar = () => {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

    return (
        <nav className="gpt__navbar">
            <div className="gpt__navbar-links">
                {/* Logo */}
                <div className="gpt__navbar-links_logo">
                    <img src={logo} alt="Logo" />
                </div>
                {/* Links */}
                <div className="gpt__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt">What is GPT</a></p>
                    <p><a href="#possibility">Possibility</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>

            {/* Sign Up */}
            <div className="gpt__navbar-sign">
                <button type="button">Sign Up</button>
            </div>

            {/* Mobile Menu */}
            <div className="gpt__navbar-menu">

                {!toggleMobileMenu ? <AlignJustifyIcon size={27} color="#fff" onClick={() => setToggleMobileMenu(true)} />
                    : <X size={27} color="#fff" onClick={() => setToggleMobileMenu(false)} />}

                {/* Mobile Menu Links */}
                {toggleMobileMenu && (
                    <div className="gpt__navbar-menu_container scale-up-center">
                        <div className="gpt_navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wgpt">What is GPT</a></p>
                            <p><a href="#possibility">Possibility</a></p>
                            <p><a href="#features">Case Studies</a></p>
                            <p><a href="#blog">Library</a></p>
                        </div>
                        <div className="gpt__navbar-menu_container-links-sign">
                            <button type="button">Sign Up</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar