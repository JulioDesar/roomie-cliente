import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5050",
});

export const useApi = () => ({
	signin: async (email: string, senha: string) => {
		const response = await api.post("/auth",
			{
				email,
				senha
			}
		).catch(err => {
			if (err?.response?.data) {
				alert("Erro ao efetuar o login")
			}
		});

		if (response?.data) return response.data;

	},

	listar: async () => {
		const response = await api.get("/clients/", {
			headers: {
				"Authorization": `Bearer ${sessionStorage.getItem("token")}`
			}
		});
		return response.data.content;
	},

	listarAlugueis: async () => {
		const response = await api.get("/alugueis/", {
			headers: {
				"Authorization": `Bearer ${sessionStorage.getItem("token")}`
			}
		});
		return response.data.content;
	},

	alugar: async (cliente_id: any, imovel_id: any, dias: any) => {
		const response = await api.post("/alugueis/", {
			cliente_id,
			imovel_id,
			dias
		}, {
			headers: {
				"Authorization": `Bearer ${sessionStorage.getItem("token")}`
			}
		});
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
			alert("Cliente cadastrado com sucesso");
			return response.data;
		}).catch(err => {
			// eslint-disable-next-line no-lone-blocks
			{
				err?.response?.data?.map((item: any) => (
					alert(item.erro)
				))
			};
		})
	},
	cadastrarImovel: async (formData: FormData) => {
		await api.post("/imoveis/cadastrarImovel", formData, {
			headers: {
				"Authorization": `Bearer ${sessionStorage.getItem("token")}`,
				"Content-Type": "multipart/form-data"
			}
		})
			.then(response => {
				alert("Imovel cadastrado com sucesso");
				return response.data;
			})
			.catch(err => {
				// eslint-disable-next-line no-lone-blocks
				{
					err?.response?.data?.map((item: any) => (
						alert(item.erro)
					))
				};
			})
	},
	atualizar: async (id: number, telefone: string, cep: string, complemento: string, numeroCasa: string, senha: string) => {
		const response = await api.put(`/clients/${id}`, {
			telefone,
			cep,
			complemento,
			numeroCasa,
			senha
		}, {
			headers: {
				"Authorization": `Bearer ${sessionStorage.getItem("token")}`
			}
		}).catch(() => {
			alert("Erro ao atualizar seus dados");
		});

		if (response?.data) sessionStorage.setItem("user", JSON.stringify(response.data));
		return response?.status;
	},
});
