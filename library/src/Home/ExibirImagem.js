import React, { useState, useEffect } from "react";
import { CapImg } from "./../Api/libraryApi";


export const ExibirCapasLivros = () => {
  const [livros, setLivros] = useState([]);
  const [livroSelecionado, setLivroSelecionado] = useState(null); 
  // Busca os dados dos livros ao carregar o componente
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

  // Função que abre o popup
  const abrirPopup = (livro) => {
    setLivroSelecionado(livro);
  };

  // Função que fecha o popup
  const fecharPopup = () => {
    setLivroSelecionado(null);
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
              onClick={() => abrirPopup(livro)} // Ao clicar na imagem, abre o popup
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
            <button className="ler-livro" >Ler Livro</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExibirCapasLivros;