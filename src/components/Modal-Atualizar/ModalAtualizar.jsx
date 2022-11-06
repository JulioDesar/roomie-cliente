import { useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../NavBar/NavBar";
import "./ModalAtualizar.scss";

export default function AtualizarForm() {

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
                        <input
                            type="text"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value.replace(/\D/g, ''))}
                            disabled
                        />
                    </label>
                    <label>
                        <span>Rua</span>
                        <input
                            type="text"
                            value={rua}
                            onChange={(e) => setRua(e.target.value.replace(/\D/g, ''))}
                            disabled
                        />
                    </label>
                    <label>
                        <span>Bairro</span>
                        <input
                            type="text"
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value.replace(/\D/g, ''))}
                            disabled
                        />
                    </label>


                    <label>
                        <span>Senha</span>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value.replace(/\D/g, ''))}
                            minLength={8}
                        />
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