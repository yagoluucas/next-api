import { IClient } from "./interface";

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/clients')
  const json = await response.json()
  console.log(json)
  return (
    <main>
      {json.map((item: IClient, index: string) => {
        return(
        <div key={index} className="bg-slate-300 my-2.5 mx-2 p-3">
          <h1 className="text-gray-950 capitalize">Nome: {item.name}</h1>
          <h2 className="capitalize">Endereço: {item.address}</h2>
        </div>)
      })}
    </main>
  );
}
