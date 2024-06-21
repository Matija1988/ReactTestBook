import { Author } from "../Model/Author";


export class AuthorSeed {
    constructor() {
        this.authors = [
            new Author(1, "Isaac", "Asimov"),
            new Author(2, 'Douglas', 'Adams'),
            new Author(3, 'Dmitry', 'Glukhovsy'),
            new Author(4, 'Andzrey', 'Sapkowski'),
            new Author(5, 'Frank', 'Herbert')
            
        ]
    }
    
    getAuthors() {

        localStorage.setItem('author', JSON.stringify(this.authors));
    }
}


// const authorSeed = [
//     {id: 1, firstName: "Isaac", lastName: "Asimov"},
//     {id: 2, firstName: "Gene", lastName:"Roddenberry "},
//     {id: 3, firstName: "James", lastName: "S.A. Corey"},
//     {id: 4, firstName: "Frank", lastName: "Herbert"}
// ]

// export const seedAuthors = () => {
//     if(!localStorage.getItem('authors')) {
//         localStorage.setItem('authors', JSON.stringify(authorSeed));
//     }
// };
