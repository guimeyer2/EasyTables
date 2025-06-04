import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="relative isolate flex items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold ">Olá, GM!</h1>
      </main>
    </div>
  );
}

export default App;
