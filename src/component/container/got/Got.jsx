import { useEffect, useState } from "react";

const getCharacters = "https://thronesapi.com/api/v2/Characters";

async function getPersonnages() {
  const response = await fetch(getCharacters); //fetch avec ajax
  /*const personnages = await response.json();
  console.log(personnages);*/
  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export function Got() {
  const [personnages, setPersonnages] = useState([]);
  useEffect(() => {
    getPersonnages().then((personnages) => {
      setPersonnages(personnages);
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen py-8 px-4">
    <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">Game of Thrones Characters</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {personnages.map((personnage) => (
        <div
          key={personnage.id}
          className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
        >
          {/* Image de fond */}
          <img
            src={personnage.imageUrl}
            alt={`Portrait of ${personnage.fullName}`}
            className="w-full h-48 object-cover opacity-75"
          />
          {/* Contenu de la bannière */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-0 p-4 text-white">
            <h3 className="text-xl font-bold">{personnage.fullName}</h3>
            <p className="text-sm italic">{personnage.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
