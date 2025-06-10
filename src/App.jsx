import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
