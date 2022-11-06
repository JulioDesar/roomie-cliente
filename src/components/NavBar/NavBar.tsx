import React from "react";
import "./NavBar.scss";
import Dropdown from "react-bootstrap/Dropdown";

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
                    <a href="*">Buscar</a>
                </li>
                <li>
                    <a href="*">Sobre nos</a>
                </li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <img width={40} src="./person.svg" alt="Roomie" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Imoveis</Dropdown.Item>
                            <Dropdown.Item>Meus Dados</Dropdown.Item>
                            <Dropdown.Item>Sair</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </nav>
    );
}