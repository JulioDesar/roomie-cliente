import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./ModalCadastro.scss";
import { Form } from "react-bootstrap";
import { useCepApi } from "../../hooks/UseCepApi";
import { useApi } from "../../hooks/UseApi";
import { Link } from "react-router-dom";

export default function CadastroForm() {

    const cepApi = useCepApi();
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
    const [complemento, setComplemento] = useState("");

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const colocarCep = async () => {
        const result = await cepApi.pegarCep(cep);

        setRua(result.logradouro);
        setBairro(result.bairro);

    }

    const cadastrarCliente = async () => {
        api.cadastrar(nome, cpf, telefone, nascimento, sexo, cep, numero, complemento, email, senha)
            .catch(err => {
                alert("Erro ao fazer o cadastro");
            });
    }

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
                        onBlur={colocarCep}
                    />
                </label>
                <label>
                    <span>Rua</span>
                    <input
                        type="text"
                        value={rua}
                        onChange={e => setRua(e.target.value)}
                        disabled
                    />
                </label>
                <label>
                    <span>Bairro</span>
                    <input
                        type="text"
                        value={bairro}
                        onChange={e => setBairro(e.target.value)}
                        disabled
                    />
                </label>
                <label>
                    <span>Numero</span>
                    <input
                        type="text"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </label>
                <label>
                    <span>Complemento</span>
                    <input
                        type="text"
                        value={complemento}
                        onChange={e => setComplemento(e.target.value)}
                    />
                </label>
                <label>
                    <span>Email</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input
                        type="password"
                        minLength={8}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </label>
                <div>
                    <Link to={"/"} ><Button variant="danger">Cancelar</Button></Link>
                    <Button variant="success" onClick={cadastrarCliente}>Confirmar</Button>
                </div>
            </form>
        </main>
    )
}