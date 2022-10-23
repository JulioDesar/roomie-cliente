import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/UseApi";
import Button from "react-bootstrap/Button";
import Navbar from "../NavBar/NavBar";
import "./ModalAtualizar.css";

export default function AtualizarForm() {

    const navigate = useNavigate();
    const api = useApi();

    const [id, setID] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <main className="atualizar">
            <Navbar />
            <article>
                <img width={400} src="./person.svg" alt="Roomie_Logo" />

                <form className="Modal-atualizar-form">

                    <label>
                        <span>Telefone</span>
                        <input
                            type="text"
                            minLength={11}
                            maxLength={11}
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value.replace(/\D/g, ''))}
                        />
                    </label>
                    <label>
                        <span>CEP</span>
                        <input type="text"
                            minLength={8}
                            maxLength={8}
                            value={cep}
                            onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
                        />
                    </label>
                    <label>
                        <span>Numero</span>
                        <input type="text" disabled />
                    </label>
                    <label>
                        <span>Rua</span>
                        <input type="text" disabled />
                    </label>
                    <label>
                        <span>Bairro</span>
                        <input type="text" disabled />
                    </label>


                    <label>
                        <span>Senha</span>
                        <input type="password" minLength={8} />
                    </label>
                    <div>
                        <Button variant="danger">Cancelar</Button>
                        <Button variant="success">Confirmar</Button>
                    </div>
                </form>
            </article>
        </main>
    )
}