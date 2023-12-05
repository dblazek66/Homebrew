import "./css/navbar.css"
import React,{useState,useEffect} from "react";
export default function Navbar(){
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setSticky(window.scrollY >200)
            console.log(window.scrollY)
        };
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    });
    return(
        <div className={`${sticky ? "sticky navbar" : "navbar"}`}>
        <a href="/" className="nav__link" data-link>Dashboard</a>
        <a href="/grains" className="nav__link" data-link>Grains</a>
        <a href="/yeast" className="nav__link" data-link>Yeast</a>
        <a href="/hops" className="nav__link" data-link>Hops</a>
        <a href="/water" className="nav__link" data-link>Water Profiles</a>
        <div className="nav-dropdown">
            <button className="dropbtn">Reference
                <i className="fas fa-caret-down"></i>
            </button>
            <div className="nav-dropdown-content">
                <a href="/img/2021_BA_Beer_Style_Guidelines_Final.pdf" target="_blank">Beer Style Guidelines</a>
                <a href="/img/Yeast Matrix.pdf" target="_blank">Yeast Substitution Chart</a>
                <a href="/img/White Labs Beer Matrix Poster.pdf" target="_blank">White Labs Beer Matrix</a>
            </div>
        </div>
        <a href="/maint" className="nav__link" data-link>Maintenance</a>
    </div>
    )
    }