import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5000",
});

export const useApi = () => ({
	validateToken: async (token: string) => {
		const response = await api.get(`/auth/valid?token=${token}`);
		return response.data;
	},
	signin: async (email: string, senha: string) => {
		const response = await api.post("/auth",
			{
				email,
				senha
			}
		).catch(err => {
			if(err?.response?.data){
				alert("Erro ao efetuar o login")
			}
		});

		if(response?.data) return response.data;

	},
	cadastrar: async (nome: string, cpf: string, telefone: string, nascimento: string, sexo: string, cep: string, numeroCasa: string, complemento: string, email: string, senha: string) => {
		await api.post("/clients/", {
			nome,
			cpf,
			telefone,
			nascimento,
			sexo,
			cep,
			numeroCasa,
			complemento,
			email,
			senha
		}).then(response => {
			alert("Usuario cadastrado com sucesso");
			return response.data;
		}).catch(err => {
			{err?.response?.data?.map((item: any) => (
				alert(item.erro)
			))};
		})


	},
	atualizar: async (id: number, telefone: string, ativo: boolean, funcao: string) => {
		const response = await api.put(`/users/${id}`, {
			telefone,
			ativo,
			funcao
		}, {
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("authToken")}`
			}
		})
		return response.status;
	},
});
