import { IClient } from "./interface";

const clients: IClient[] = [
    {
        name: "yago",
        address: "Rua dos zero 000",
    },
    {
        name: "Lucas",
        address: "Rua 222",
    },
]; // lista vazia
export function GET() {
    return Response.json(clients); // objeto que irá retornar
}

export async function POST(request: Request) {
    const form = await request.formData(); // pega o que veio da caixa de texto
    const name = form.get("name") as string; // pega o nome do usuário que veio na requisição
    const address = form.get("address") as string; // pega o endereço do cliente que veio na requisição
    clients.push({
        name,
        address
    })
    return Response.json({
        status: "Adicionado"
    });
}
