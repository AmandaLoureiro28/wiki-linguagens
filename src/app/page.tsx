import Image from "next/image";
import Hero from "./components/Hero";
import LanguageList from "./components/LanguageList";

export default function Home() {
  const languages = [

    { name: "Dart", route: "pages/dart" },
    { name: "Assembly", route: "pages/assembly"},
    { name: "SQL", route: "pages/sql" },
    { name: "Ruby", route: "pages/ruby" },
    // Adicione mais linguagens aqui no futuro
    // Adicione mais linguagens aqui no futuro
    // Adicione mais linguagens aqui no futuro
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <main className="container mx-auto p-6">
        <LanguageList languages={languages} />
      </main>
    </div>
  );
}
