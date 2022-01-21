const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const formatedBookNames = () => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

// console.log(formatedBookNames())

/* const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
]; */

// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado. 

function nameAndAge() {
  const objeto = books.map((book) => ({age: book.releaseYear - book.author.birthYear, author: book.author.name,}));
  objeto.sort((a, b) => a.age - b.age);
  return objeto;
}
/* console.log(nameAndAge());
 */  

/* const expectedResult = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
]; */

/* Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia. 
 */
function fantasyOrScienceFiction() {
  const leticia = books.filter((livro) => livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia')
  return leticia;
}

// console.log(fantasyOrScienceFiction());

function oldBooksOrdered() {
  const livros = books.filter((livro) => (2021 - livro.releaseYear) > 60);
  return livros.sort((a, b) => a.releaseYear - b.releaseYear);
}

// console.log(oldBooksOrdered())

function fantasyOrScienceFictionAuthors() {
    const leticia = books.filter((livro) => livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia');

    const autores = leticia.map((autor) => autor.author.name);

    return autores.sort();
}

// console.log(fantasyOrScienceFictionAuthors());

function oldBooks() {
  const livros = books.filter((livro) => (2021 - livro.releaseYear) > 60);
  return livros.map((livro) => livro.name);
}
// console.log(oldBooks())

