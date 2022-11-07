export type User = {
    id: number;
    nome: string;
    cpf: string;
    sexo: string;
    cep: string;
    numeroCasa: string;
    complemento: string;
    nascimento: Date;
    telefone: string;
    email: string;
    password?: string;
}