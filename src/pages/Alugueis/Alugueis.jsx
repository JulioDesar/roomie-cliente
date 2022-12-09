import Navbar from "../../components/NavBar/NavBar";
import { useApi } from "../../hooks/UseApi";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./Alugueis.scss";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export default function ListarAlugueis() {

    const api = useApi();
    const auth = useContext(AuthContext);

    const [alugueis, setAlugueis] = useState();

    const lista = async () => {
        const result = await api.listarAlugueis();
        setAlugueis(result);
    }

    useEffect(() => {
        lista();
    }, []);

    return (
        <section className="Aluguel-Container">
            <Navbar />
            {alugueis?.map(aluguel => (
                aluguel?.cliente?.id === auth?.user?.id && (
                    <Card style={{ width: "14rem" }} key={aluguel?.imovel.id}>
                        <Carousel variant="dark">
                            {aluguel?.imovel?.imagens?.map((item) => (
                                <Carousel.Item key={item?.id}>
                                    <img
                                        className="d-block w-100"
                                        src={"data:image/png;base64," + item?.imagem}
                                        alt="imovel"
                                    /></Carousel.Item>
                            ))}
                        </Carousel>
                        <Card.Body>
                            <Card.Title>{aluguel?.imovel?.titulo}</Card.Title>
                            <Card.Text>
                                {aluguel?.imovel?.descricao}
                            </Card.Text>
                            <Card.Text>
                                {aluguel?.dataInicial} Até {aluguel?.dataFinal}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )))}
        </section>
    );
}