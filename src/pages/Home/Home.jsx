import { useEffect, useState } from "react";
import { Card, Carousel, Button } from "react-bootstrap";
import Navbar from "../../components/NavBar/NavBar";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/UseApi";
import "./Home.scss";

export default function Home() {
    const api = useApi();
    const navigate = useNavigate();

    const [clients, setClients] = useState([]);

    const lista = async () => {
        const result = await api.listar();
        setClients(result);
    }

    const paginaImovel = (client, imovel) => {
        sessionStorage.setItem("client", JSON.stringify(client));
        sessionStorage.setItem("imovel", JSON.stringify(imovel));
        navigate("/imovel")
    }

    useEffect(() => {
        lista();
    }, []);

    return (
        <main className="home-container">
            <Navbar />
            <section>
                {clients.map(client => (
                    client.imoveis.map(imovel => (
                        imovel.status === "APROVADO" && (
                            <Card style={{ width: "14rem" }} key={imovel.id}>
                                <Carousel variant="dark">
                                    {imovel.imagens.map((item) => (
                                        <Carousel.Item key={item.id}>
                                            <img
                                                className="d-block w-100"
                                                src={"data:image/png;base64," + item.imagem}
                                                alt="imovel"
                                            /></Carousel.Item>
                                    ))}
                                </Carousel>
                                <Card.Body>
                                    <Card.Title>{imovel.titulo}</Card.Title>
                                    <Card.Text>
                                        {imovel.descricao}
                                    </Card.Text>
                                    <Card.Text>
                                        R${imovel.preco}
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="primary" onClick={() => paginaImovel(client, imovel)}>Detalhes</Button>
                            </Card>
                        )
                    ))))}
            </section>
        </main>
    )
}