import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/UseApi";
import Button from "react-bootstrap/Button";
import "./ModalCadastro.css";
import { Form } from "react-bootstrap";

export default function CadastroForm() {

    const navigate = useNavigate();
    const api = useApi();

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [nascimento, setNascimento] = useState(Date());
    const [telefone, setTelefone] = useState("");
    const [sexo, setSexo] = useState("");

    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <main className="cadastrar">

            <img width={600} src="./logo.svg" alt="Roomie_Logo" />

            <form className="Modal-cadastro-form">
                <label>
                    <span>Nome Completo</span>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>
                <label>
                    <span>CPF</span>
                    <input
                        type="text"
                        minLength={11}
                        maxLength={11}
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value.replace(/\D/g, ''))}
                    />
                </label>
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
                    <span>Data de Nascimento</span>
                    <input type="Date"
                        value={nascimento}
                        onChange={(e) => setNascimento(e.target.value)}
                    />
                </label>
                <label>
                    <Form.Check
                        type="radio"
                        value={"Masculino"}
                        checked={sexo === "Masculino"}
                        onChange={(e) => setSexo(e.target.value)}
                    /> Masculino
                    <Form.Check
                        type="radio"
                        value={"Feminino"}
                        checked={sexo === "Feminino"}
                        onChange={(e) => setSexo(e.target.value)}
                    /> Feminino
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
                    <span>Email</span>
                    <input type="email" />
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

        </main>
    )
}