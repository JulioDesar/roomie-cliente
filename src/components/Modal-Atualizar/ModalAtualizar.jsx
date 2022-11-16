import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useApi } from "../../hooks/UseApi";
import { useCepApi } from "../../hooks/UseCepApi";
import Navbar from "../NavBar/NavBar";
import "./ModalAtualizar.scss";

export default function AtualizarForm() {

    const cepApi = useCepApi();
    const api = useApi();
    const auth = useContext(AuthContext);

    const colocarCep = async () => {
        const result = await cepApi.pegarCep(cep);

        setRua(result.logradouro);
        setBairro(result.bairro);
    }

    const atualizar = async () => {
        await api.atualizar(auth.user.id, telefone, cep, complemento, numero, senha);
    }

    const [telefone, setTelefone] = useState(auth.user.telefone);
    const [cep, setCep] = useState(auth.user.cep);
    const [numero, setNumero] = useState(auth.user.numeroCasa);
    const [rua, setRua] = useState(colocarCep);
    const [bairro, setBairro] = useState(colocarCep);
    const [complemento, setComplemento] = useState(auth.user.complemento);
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
                            onBlur={colocarCep}
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
                        <span>Complemento</span>
                        <input
                            type="text"
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
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
                        <Button variant="success" onClick={atualizar}>Confirmar</Button>
                    </div>
                </form>
            </article>
        </main>
    )
}