// ARQUIVO vite.config.js - VERSÃO CORRIGIDA
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Não precisa importar o tailwindcss aqui

export default defineConfig({
  plugins: [react()], // Apenas o plugin do React
});
