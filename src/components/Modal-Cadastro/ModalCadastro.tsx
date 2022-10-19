import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/UseApi";
import "./ModalCadastro.css";

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
                    <input type="text" />
                </label>
                <label>
                    <span>CPF</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Telefone</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Data de Nascimento</span>
                    <input type="Date" />
                </label>
                <label>
                    <span>Sexo</span>
                    <input type="radio" value={"Masculino"} /> Masculino
                    <input type="radio" value={"Feminino"} /> Feminino
                </label>

                <label>
                    <span>CEP</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Numero</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Rua</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Bairro</span>
                    <input type="text" />
                </label>

                <label>
                    <span>Email</span>
                    <input type="email" />
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" />
                </label>
                <div>
                    <button>Cancelar</button>
                    <button>Confirmar</button>
                </div>

            </form>

        </main>
    )
}