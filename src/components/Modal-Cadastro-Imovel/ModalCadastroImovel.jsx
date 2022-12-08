import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import "./ModalCadastroImovel.scss";
import { FloatingLabel, Form } from "react-bootstrap";
import { useCepApi } from "../../hooks/UseCepApi";
import { useApi } from "../../hooks/UseApi";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/NavBar";

export default function CadastroImovelForm() {

    const cepApi = useCepApi();
    const api = useApi();
    const auth = useContext(AuthContext);
    const formData = new FormData();

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [sexo, setSexo] = useState("");
    const [quartos, setQuartos] = useState("");
    const [preco, setPreco] = useState("");
    const [semestre, setSemestre] = useState("");
    const [fotos, setPhotos] = useState([]);

    const colocarCep = async () => {
        const result = await cepApi.pegarCep(cep);
        setRua(result.logradouro);
        setBairro(result.bairro);
        setEstado(result.uf);
        setCidade(result.localidade);
    }

    const handleFile = (e) => {
        const newFiles = []
        for (let i = 0; i < e.target.files.length; i++) {
            newFiles.push(e.target.files[i]);
        }
        setPhotos(newFiles);
    }

    const cadastrarImovel = async () => {
        const imovel = {
            titulo: titulo,
            cep: cep,
            numero_casa: numero,
            complemento: complemento,
            descricao: descricao,
            sexo: sexo,
            cidade: cidade,
            estado: estado,
            numeroQuartos: quartos,
            preco: preco
        };

        formData.append("id", auth.user.id);
        formData.append("data", JSON.stringify(imovel));

        for (let i = 0; i < fotos.length; i++) {
            formData.append("file", fotos[i]);
        }
        
        console.log(formData.getAll("file"));
        api.cadastrarImovel(formData)
            .catch(() => {
                alert("Erro ao cadastrar o imovel");
            });
    }

    return (
        <>
            <Navbar />
            <main className="imovel">
                <img width={600} src="./logo.svg" alt="Roomie_Logo" />
                <form className="Modal-cadastro-form" encType="multipart/form-data">
                    <label>
                        <span>Titulo</span>
                        <input
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
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
                        <span>Cidade</span>
                        <input
                            type="text"
                            value={cidade}
                            disabled
                        />
                    </label>

                    <label>
                        <span>Estado</span>
                        <input
                            type="text"
                            value={estado}
                            disabled
                        />
                    </label>

                    <label>
                        <span>Aceita Genero especifico</span>
                        <Form.Select
                            value={sexo}
                            onChange={(e) => setSexo(e.target.value)}
                        >
                            <option value="MASCULINO" onSelect={() => setSexo("MASCULINO")}>
                                Masculino
                            </option>
                            <option value="FEMININO" onSelect={() => setSexo("FEMININO")}>
                                Feminino
                            </option>
                            <option value="INDIFERENTE" onSelect={() => setSexo("INDIFERENTE")}>
                                Indiferente
                            </option>
                        </Form.Select>

                    </label>

                    <label>
                        <span>Quantidade de Quartos</span>
                        <input
                            type="text"
                            value={quartos}
                            onChange={(e) => setQuartos(e.target.value.replace(/\D/g, ""))}
                        />
                    </label>

                    <label>
                        <span>Preço</span>
                        <input
                            type="text"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value.replace(/\D/g, "."))}
                        />
                    </label>

                    <label>
                        <span>Quantos Semestres</span>
                        <Form.Select
                            value={semestre}
                            onChange={(e) => setSexo(e.target.value)}
                        >
                            <option value="1" onSelect={() => setSemestre("1")}>
                                1
                            </option>
                            <option value="2" onSelect={() => setSemestre("2")}>
                                2
                            </option>
                            <option value="3" onSelect={() => setSemestre("3")}>
                                3
                            </option>
                            <option value="4" onSelect={() => setSemestre("4")}>
                                4
                            </option>
                        </Form.Select>

                    </label>

                    <Form.Control type="file" multiple onChange={e => handleFile(e)} />

                    <FloatingLabel label="Descrição">
                        <Form.Control
                            as="textarea"
                            style={{ height: "100px" }}
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </FloatingLabel>
                    <div>
                        <Link to={"/Imovel"} ><Button variant="danger">Cancelar</Button></Link>
                        <Button variant="success" onClick={cadastrarImovel}>Confirmar</Button>
                    </div>
                </form>
            </main>
        </>
    )
}