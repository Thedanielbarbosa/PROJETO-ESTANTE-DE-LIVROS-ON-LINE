export async function findAll(){
    const requestInit = {
        method: "GET",
        headers:{
            accept: "application/json",
            Authorization: "Bearer 12111364"
        }
    };

    const httpResponse = await fetch(
        'https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/books',
        requestInit
    );

    if(httpResponse.ok){
        return await httpResponse.json();
    }else{
        throw new Error(
            "Não foi possivel obter os livro desejado, por gentileza entrar em contato com o suporte."
        );
    }
}

export async function CapImg() {
    const requestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer 12111364",
      },
    };
  
    const httpResponse = await fetch(
      "https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/books",
      requestInit
    );
  
    if (httpResponse.ok) {
      const data = await httpResponse.json();
  
      // Mapeando os dados para incluir informações do livro e a URL da imagem
      const livrosComImagens = data.map((livro) => ({
        id: livro.id,
        title: livro.title,
        authors: livro.authors,
        publisher: livro.publisher,
        publishedDate: livro.publishedDate,
        description: livro.description,
        language: livro.language,
        imageUrl: livro.imageLinks?.thumbnail || livro.imageLinks?.smallThumbnail, // Pegando a URL da imagem
        categories: livro.categories,
        previewLink: livro.previewLink,
        infoLink: livro.infoLink,
      }));
  
      return livrosComImagens; // Retorna o array de livros com todos os dados e imagem
    } else {
      throw new Error(
        "Não foi possível obter as imagens dos livros. Por favor, entre em contato com o suporte."
      );
    }
  }