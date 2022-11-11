import { useEffect, useState } from "react";
import { useApi } from "../../hooks/UseApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("user");
        console.log(loggedInUser);
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    const signin = async (email: string, password: string) => {
        await api.signin(email, password)
            .then(data => {
                if (data.user && data.token) {
                    setUser(data.user);
                    sessionStorage.setItem("user", JSON.stringify(data.user));
                    setToken(data.token);
                }
            });
        return user ? true : false;
    }

    const signout = () => {
        setUser(null);
        setToken(null);
        sessionStorage.clear();
    }

    const setToken = (token: any) => {
        if (token != null) {
            sessionStorage.setItem('token', token);
        } else {
            sessionStorage.removeItem('token');
        }
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}