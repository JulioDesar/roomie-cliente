import axios from "axios";

const cepApi = axios.create({
    baseURL: "https://viacep.com.br/ws",
});

export const useCepApi = () => ({

    pegarCep: async (cep: string) => {
        const response = await cepApi.get(`/${cep}/json/`);

        return response.data;
    }
});
