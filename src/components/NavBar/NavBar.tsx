import React from "react";
import "./NavBar.css";

export default function Navbar() {
    return (
        <nav className="NavbarAdmin-container">
            <ul>
                <li>
                    <img width={80} src="./Roomie2.svg" alt="Roomie" />
                </li>
                <li>
                    <a href="*">Home</a>
                </li>
                <li>
                    <a href="*">Busque Aqui</a>
                </li>
                <li>
                    <a href="*">Sobre nos</a>
                </li>
                <li>
                    <img width={40} src="./person.svg" alt="Roomie" />
                </li>
            </ul>
        </nav>
    );
}