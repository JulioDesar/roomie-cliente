import React from "react";
import "./Login.scss";

import { LoginForm } from "../../components/Login-form/LoginForm";

export default function Login() {
	return (
		<section className="Login-Container">
			<LoginForm />
		</section>
	);
}