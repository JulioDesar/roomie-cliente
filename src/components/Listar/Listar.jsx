import { useState, useEffect, useContext } from "react";
import { useApi } from "../../hooks/UseApi";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./Listar.scss";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export default function Listar() {

    const api = useApi();
    const auth = useContext(AuthContext);

    const [clients, setClients] = useState([]);

    const lista = async () => {
        const result = await api.listar();
        setClients(result);
    }

    useEffect(() => {
        lista();
    }, []);

    return (
        <section className="Listar-Container">
            {clients.map(client => (
                client.id === auth?.user?.id && (
                    client.imoveis.map(imovel => (
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
                                    {imovel.status}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                )
            ))}
        </section>
    );
}