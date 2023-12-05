import { React, useEffect, useState } from 'react'

function Navbar() {

    const [bodyToggle, setBodyToggle] = useState(false)     

    useEffect(() => {
        // 👇 add class to body element
        document.body.classList.toggle('mobile-nav-active', bodyToggle);

        return () => {
            document.body.classList.remove('mobile-nav-active', bodyToggle);
        }
    }, [bodyToggle])

    function toggle_burger(){
        setBodyToggle(!bodyToggle)
    }

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <a
                    href="index.html"
                    className="logo d-flex align-items-center me-auto me-lg-0"
                >
                    {/* Uncomment the line below if you also wish to use an image logo */}
                    {/* <img src="assets/img/logo.png" alt=""> */}
                    <h1>
                        Yummy<span>.</span>
                    </h1>
                </a>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <a href="#hero">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#menu">Menu</a>
                        </li>
                        <li>
                            <a href="#events">Events</a>
                        </li>
                        <li>
                            <a href="#chefs">Chefs</a>
                        </li>
                        <li>
                            <a href="#gallery">Gallery</a>
                        </li>
                        <li className="dropdown">
                            <a href="#">
                                <span>Drop Down</span>{" "}
                                <i className="bi bi-chevron-down dropdown-indicator" />
                            </a>
                            <ul>
                                <li>
                                    <a href="#">Drop Down 1</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">
                                        <span>Deep Drop Down</span>{" "}
                                        <i className="bi bi-chevron-down dropdown-indicator" />
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">Deep Drop Down 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 3</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 4</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 5</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Drop Down 2</a>
                                </li>
                                <li>
                                    <a href="#">Drop Down 3</a>
                                </li>
                                <li>
                                    <a href="#">Drop Down 4</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                {/* .navbar */}
                <a className="btn-book-a-table" href="#book-a-table">
                    Book a Table
                </a>
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list" onClick={toggle_burger}/>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" onClick={toggle_burger} />
            </div>
        </header>

    )
}

export default Navbar