// Importando o img

import Search from "./../img/Search.svg";

import bookmenu from "./../img/bookimg.svg";

import house from "./../img/house.svg";

import gear from "./../img/gear.svg";

import logobooks from "./../img/books.png";

import { useState } from "react";

import SearchInput from "./../SearchInput";

import { useEffect } from "react";

import { findAll, CapImg } from "./../Api/libraryApi";

import fotoperfil from "./../img/Killua.jpg";

import { useNavigate } from "react-router-dom";

export function Homepage() {
  const [books, setBooks] = useState([]);
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const NextPageHome = () => {
    navigate("/");
  };
  const [livros, setLivros] = useState([]);

  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  const [livroSelecionado2, setLivroSelecionado2] = useState(null);
  const [finalizado, setFinalizado] = useState([]);

  const moverLivro = (favoritos) => {
    // Remove o livro de livrosDisponiveis
    setFavoritos((prev) => prev.filter((item) => item.id !== favoritos.id));

    // Adiciona o livro à pratileira
    setFinalizado((prev) => [...prev, favoritos]);
  };

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

  const abrirPopup2 = (favoritos) => {
    setLivroSelecionado2(favoritos);
  };

  const fecharPopup2 = () => {
    setLivroSelecionado2(null);
  };

  // Função para adicionar livro aos favoritos
  const adicionarFavorito = (livro) => {
    if (!favoritos.some((fav) => fav.id === livro.id)) {
      setFavoritos([...favoritos, livro]);
      alert(`"${livro.title}" foi adicionado a sua leitura!`);
    } else {
      alert(`"${livro.title}" já está na sua leitura!`);
    }
  };

  const adicionarfinalizado = (livro) => {
    if (!finalizado.some((fan) => fan.id === livro.id)) {
      setFinalizado([...finalizado, livro]);
      alert(`"${livro.title}" foi adicionado aos finalizado!`);
    } else {
      alert(`"${livro.title}" já está nos finalizado!`);
    }
  };

  const Exibirfinalizado = ({ finalizado = [] }) => {
    console.log(finalizado);

    if (finalizado.length === 0) {
      return null; // Não exibe nada se não houver favoritos
    }
  };

  const ExibirFavoritos = ({ favoritos = [] }) => {
    console.log(favoritos);

    if (favoritos.length === 0) {
      return null; // Não exibe nada se não houver favoritos
    }
  };
  return (
    <div className="GridBasicStructure">
      <div className="MenuLateral">
        <div>
          <div className="Logo">
            <a href="#" className="logo">
              <img className="imglogo" src={logobooks} />
              LIBRARY
            </a>
          </div>

          <div className="NavBar">
            <ul>
              <li className="btnmenu">
                <a href="#" onClick={NextPageHome}>
                  <img className="bookimg" src={house} />
                  Home
                </a>
              </li>
              <li className="btnmenu">
                <a href="#">
                  <img className="bookimg" src={bookmenu} /> My library
                </a>
              </li>
              <li className="btnmenu">
                <a href="#">
                  <img className="bookimg" src={gear} />
                  Seting
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="Bookreading">
          <div className="mybookread">
            <div className="continueReading">
              {favoritos[0] ? (
                <div key={favoritos[0].id} className="livro-item">
                  <img
                    src={favoritos[0].imageUrl}
                    alt={favoritos[0].title}
                    className="imgcontinue"
                  />
                  <h4 className="namecont">Continuar lendo</h4>
                </div>
              ) : (
                <p className="description">
                  Você não esta lendo nem um livro no momento.
                </p>
              )}
            </div>

            <div className="go">
              <img className="Perfil" src={fotoperfil} />
              <p className="p">Daniel</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Conteudo">
        <div className="Estante">
          <div className="Barsearch">
            <div className="barcategoria">
              <a
                href="#"
                onClick={async () => {
                  const dados = await findAll();
                  setBooks(dados);
                }}
              >
                All books
              </a>

              <a href="#">Shelves</a>
            </div>
            <div className="Search">
              <button className="button">
                <img className="imgsearch" src={Search} />
              </button>

              <SearchInput
                value={text}
                onChange={(search) => setText(search)}
              />
            </div>
          </div>

          <div className="Pratileira">
            <h4>Estou lendo:</h4>
            <div className="books">
              {favoritos.map((fav) => (
                <div key={fav.id} className="livro-item">
                  <img
                    src={fav.imageUrl}
                    alt={fav.title}
                    className="img-livro"
                    onClick={() => abrirPopup2(fav)}
                  />
                </div>
              ))}
            </div>

            <div className="pratileiradolivro"></div>
          </div>
          <div className="Pratileira">
            <h4>Quero ler:</h4>
            <div className="books">
              <div className="b">
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
              </div>
            </div>

            <div className="pratileiradolivro"></div>
          </div>
          <div className="Pratileira">
            <h4>Já lido:</h4>
            <div className="books">
              {finalizado.map((fav) => (
                <div key={fav.id} className="livro-item">
                  <img
                    src={fav.imageUrl}
                    alt={fav.title}
                    className="img-livro"
                    onClick={() => abrirPopup2(fav)}
                  />
                </div>
              ))}
            </div>

            <div className="pratileiradolivro"></div>
          </div>

          {livroSelecionado && (
            <div className="popup" onClick={fecharPopup}>
              <div
                className="popup-conteudo"
                onClick={(e) => e.stopPropagation()}
              >
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
                    <p>
                      <strong>Autor(es):</strong>{" "}
                      {livroSelecionado.authors?.join(", ")}
                    </p>
                    <p>
                      <strong>Editora:</strong> {livroSelecionado.publisher}
                    </p>
                    <p>
                      <strong>Data de publicação:</strong>{" "}
                      {livroSelecionado.publishedDate}
                    </p>
                    <p>
                      <strong>Idioma:</strong> {livroSelecionado.language}
                    </p>
                    <p>
                      <strong>Categorias:</strong>{" "}
                      {livroSelecionado.categories?.join(", ")}
                    </p>
                  </div>
                </div>
                <p>
                  <strong>Descrição:</strong> {livroSelecionado.description}
                </p>
                <a
                  href={livroSelecionado.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mais informações
                </a>
                <button
                  className="ler-livro"
                  onClick={() => adicionarFavorito(livroSelecionado)}
                >
                  Ler Livro
                </button>
              </div>
            </div>
          )}

          {livroSelecionado2 && (
            <div className="popup" onClick={fecharPopup2}>
              <div
                className="popup-conteudo"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="fechar-btn" onClick={fecharPopup2}>
                  x
                </button>
                <h2>{livroSelecionado2.title}</h2>
                <div className="inf-Livro">
                  <div>
                    <img
                      src={livroSelecionado2.imageUrl}
                      alt={livroSelecionado2.title}
                      className="img-popup"
                    />
                  </div>
                  <div className="dados-livro">
                    <p>
                      <strong>Autor(es):</strong>{" "}
                      {livroSelecionado2.authors?.join(", ")}
                    </p>
                    <p>
                      <strong>Editora:</strong> {livroSelecionado2.publisher}
                    </p>
                    <p>
                      <strong>Data de publicação:</strong>{" "}
                      {livroSelecionado2.publishedDate}
                    </p>
                    <p>
                      <strong>Idioma:</strong> {livroSelecionado2.language}
                    </p>
                    <p>
                      <strong>Categorias:</strong>{" "}
                      {livroSelecionado2.categories?.join(", ")}
                    </p>
                  </div>
                </div>
                <p>
                  <strong>Descrição:</strong> {livroSelecionado2.description}
                </p>
                <a
                  href={livroSelecionado2.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mais informações
                </a>

                <button
                  className="ler-livro"
                  onClick={() => {
                    moverLivro(livroSelecionado2);
                  }}
                >
                  Finalizado
                </button>
              </div>
            </div>
          )}

          <div className="Pratileira"></div>
        </div>
      </div>
    </div>
  );
}
