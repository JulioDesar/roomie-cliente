import { useState, useEffect, useContext } from "react";
import { Carousel } from "react-bootstrap";
import Navbar from "../../components/NavBar/NavBar";
import { useApi } from "../../hooks/UseApi";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Imovel.scss";

export default function Imovel() {

    const api = useApi();
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [imovel, setImovel] = useState([]);


    const alugar = async () => {

        await api.alugar(auth?.user?.id, imovel.id, 180).then(() => {
            alert("Aluguel feito com sucesso!")
        }).catch(() => {
            alert("Erro ao fazer o aluguel");
        });
        navigate("/home");
    }

    useEffect(() => {
        setImovel(JSON.parse(sessionStorage.getItem("imovel")));
    }, []);

    return (
        <>
            <Navbar />
            <main className="imovel-container">
                <Carousel variant="dark" className="imovel-imagem">
                    {imovel?.imagens?.map((item) => (
                        <Carousel.Item key={item.id}>
                            <img
                                className="d-block w-100"
                                src={"data:image/png;base64," + item.imagem}
                                alt="imovel"
                            /></Carousel.Item>
                    ))}
                </Carousel>
                <section>
                    {imovel?.descricao}
                </section>
                <section>
                    Numero de Quartos: {imovel?.numeroQuartos}
                </section>
                <section>
                    Endereco:
                    <ul>
                        <li>Estado: {imovel?.estado}</li>
                        <li>Cidade: {imovel?.cidade}</li>
                        <li>Cep: {imovel?.cep}</li>
                    </ul>
                </section>
                <section>
                    R${imovel?.preco}
                </section>
                <button className="Alugar-button" onClick={() => alugar()}>
                    Alugar
                </button>
            </main>
        </>
    )

}