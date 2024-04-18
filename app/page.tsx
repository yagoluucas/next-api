export default async function Home() {
  const rest = await fetch('/api/clients')
  return (
    <main>
      <h1>Oi</h1>
    </main>
  );
}
