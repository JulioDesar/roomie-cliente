import { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/Auth/AuthContext';
import "./LoginForm.scss";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const logar = async() => {
        const isLogged = await auth.signin(email, password);
        console.log(isLogged);

        if (isLogged) {
            navigate("/atualizar");
        }
    }

    return (
        <header>
            <img width={400} src="./logo.svg" alt="Roomie" />

            <form>
                <span>Login</span>
                <label className="Modal-input-container">
                    <input
                        type="email"
                        value={email}
                        onChange={((e) => setEmail(e.target.value))}
                        size={70}
                        className="Modal-input"
                    />
                </label>

                <span>Senha</span>
                <label className="Modal-input-container">
                    <input
                        type="password"
                        value={password}
                        onChange={((e) => setPassword(e.target.value))}
                        size={70}
                        className="Modal-input"
                    />
                </label>

                <div><Link to="/cadastrar">Cadastra-se</Link></div>
                <Link to="/">
                    <button
                        className="Login-button"
                        onClick={logar}
                    >
                        Entrar
                    </button>
                </Link>
            </form>
        </header>
    );
}

