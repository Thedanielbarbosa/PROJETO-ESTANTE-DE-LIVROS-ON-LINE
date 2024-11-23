import React, { useState, useEffect } from "react";
import { CapImg } from "../Api/libraryApi";

// Componente para exibir os favoritos
export const ExibirFavoritos = ({ favoritos, abrirPopup }) => {
  if (favoritos.length === 0) {
    return null; // Não exibe nada se não houver favoritos
  }

  return (
    <div className="favoritos">
      <h2>Favoritos:</h2>
      <ul>
        {favoritos.map((fav) => (
          <div key={fav.id} className="livro-item">
            <img
              src={fav.imageUrl}
              alt={fav.title}
              className="img-livro"
              onClick={() => abrirPopup(fav)}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

// Componente principal
export const Reading = () => {
  const [livros, setLivros] = useState([]);
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [favoritos, setFavoritos] = useState([]); // Estado para os favoritos

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const livrosObtidos = await CapImg();
        setLivros(livrosObtidos);
      } catch (error) {
        console.error("Erro ao buscar os livros:", error);
      }
    };
    fetchLivros();
  }, []);

  const abrirPopup = (livro) => {
    setLivroSelecionado(livro);
  };

  const fecharPopup = () => {
    setLivroSelecionado(null);
  };

  // Função para adicionar livro aos favoritos
  const adicionarFavorito = (livro) => {
    if (!favoritos.some((fav) => fav.id === livro.id)) {
      setFavoritos([...favoritos, livro]);
      alert(`"${livro.title}" foi adicionado aos favoritos!`);
    } else {
      alert(`"${livro.title}" já está nos favoritos!`);
    }
  };

  return (
    <div>
      {/* Lista de livros */}
      <div className="livros-lista">
        {livros.map((livro) => (
          <div key={livro.id} className="livro-item">
            <img
              src={livro.imageUrl}
              alt={livro.title}
              className="img-livro"
              onClick={() => abrirPopup(livro)}
            />
          </div>
        ))}
      </div>

      {/* Popup com informações do livro */}
      {livroSelecionado && (
        <div className="popup" onClick={fecharPopup}>
          <div className="popup-conteudo" onClick={(e) => e.stopPropagation()}>
            <button className="fechar-btn" onClick={fecharPopup}>
              x
            </button>
            <h2>{livroSelecionado.title}</h2>
            <div className="inf-Livro">
              <div>
                <img
                  src={livroSelecionado.imageUrl}
                  alt={livroSelecionado.title}
                  className="img-popup"
                />
              </div>
              <div className="dados-livro">
                <p><strong>Autor(es):</strong> {livroSelecionado.authors?.join(", ")}</p>
                <p><strong>Editora:</strong> {livroSelecionado.publisher}</p>
                <p><strong>Data de publicação:</strong> {livroSelecionado.publishedDate}</p>
                <p><strong>Idioma:</strong> {livroSelecionado.language}</p>
                <p><strong>Categorias:</strong> {livroSelecionado.categories?.join(", ")}</p>
              </div>
            </div>
            <p><strong>Descrição:</strong> {livroSelecionado.description}</p>
            <a href={livroSelecionado.infoLink} target="_blank" rel="noopener noreferrer">
              Mais informações
            </a>
            <button className="ler-livro" onClick={() => adicionarFavorito(livroSelecionado)}>
              Ler Livro
            </button>
          </div>
        </div>
      )}

      {/* Exibição dos favoritos */}
      <ExibirFavoritos favoritos={favoritos} abrirPopup={abrirPopup} />
    </div>
  );
};

