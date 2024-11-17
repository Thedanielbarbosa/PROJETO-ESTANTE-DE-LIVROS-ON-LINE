import { useEffect, useState } from "react";
import { CapImg } from "./../Api/libraryApi";

const ExibirCapasLivros = () => {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    CapImg()
      .then((imagensObtidas) => {
        setImagens(imagensObtidas); // Atualiza o estado com as URLs das imagens
      })
      .catch((error) => {
        console.error("Erro ao buscar as imagens:", error);
      });
  }, []);

  return (
    <div>
      {imagens.length > 0 ? (
        imagens.map((imagemUrl, index) => (
            <button className="imgbtn">
                <img className="imgbooks"
                    key={index}
                    src={imagemUrl}
                    alt={`Capa do livro ${index + 1}`}
                
                />
            </button>
        ))
      ) : (
        <p>Carregando imagens...</p>
      )}
    </div>
  );
};

export default ExibirCapasLivros;