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
        Authorization: "Bearer 12111364"
      }
    };
  
    const httpResponse = await fetch(
      'https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/books',
      requestInit
    );
  
    if (httpResponse.ok) {
      const data = await httpResponse.json();
  
      // Supondo que a resposta seja um array de livros, e que cada livro tenha o campo 'imageLinks' com as URLs das imagens
      // Verificamos primeiro se existe o campo 'imageLinks' e pegamos o campo 'thumbnail' ou 'smallThumbnail'
      const imagens = data.map((livro) => livro.imageLinks?.thumbnail || livro.imageLinks?.smallThumbnail);
  
      return imagens; // Retorna um array de URLs de imagens
    } else {
      throw new Error(
        "Não foi possível obter as imagens dos livros. Por favor, entre em contato com o suporte."
      );
    }
  }