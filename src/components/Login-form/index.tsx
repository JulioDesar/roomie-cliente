import { useState } from 'react';
import { Link } from "react-router-dom";
import "./style.css";

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

                <div><a href="/">Esqueci minha senha</a></div>
                <Link to="/">
                    <button
                        className="Login-button">
                        Entrar
                    </button>
                </Link>
            </form>
        </header>
    );
}

