import React from "react";
import Listar from "../../components/Listar/Listar";
import Navbar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import "./Imovel.scss";

export default function Imovel() {

    const navigate = useNavigate();

    return (
        <section className="Imovel-Container">
            <Navbar />
            <form className="button-modal" onClick={() => navigate("/cadastrarImovel")}>
                Cadastrar Imovel
            </form>
            <Listar />
        </section>
    );
}