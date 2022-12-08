import React, { useContext } from "react";
import "./NavBar.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export default function Navbar() {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const signout = () => {
        auth.signout();
        navigate("/");
    }

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

                {auth.user && (
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <img width={40} src="./person.svg" alt="Roomie" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => navigate("/Imovel")}>Meus Imoveis</Dropdown.Item>
                                <Dropdown.Item>Meus Alugueis</Dropdown.Item>
                                <Dropdown.Item onClick={() => navigate("/atualizar")}>Meus Dados</Dropdown.Item>
                                <Dropdown.Item onClick={signout}>Sair</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                )}
                {!auth.user && (
                    <li>
                        <Link to={"/"}>Login</Link>
                    </li>
                )}

            </ul>
        </nav>
    );
}