import React from "react";
import Listar from "../../components/Listar/Listar";
import Navbar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import "./ListarImovel.scss";

export default function ListarImovel() {

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