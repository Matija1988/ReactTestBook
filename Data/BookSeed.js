import { Book } from "../Model/Book";

export class BookSeed {
    constructor() {
        this.books = [
            new Book(1, "The hitchhiker's guide to the galaxy", "Sci-fi comedy satire"),
            new Book(2, "I, robot", "Sci-fi hard Sci-fi"),
            new Book(3, "Metro 2033", "Sci-fi satire"),
            new Book(4, "The Witcher - The Last Wish", "Fantasy satire"),
            new Book(5, "The Dune", "Sci-fi")
        ]
    }

    getBooks() {
        return this.books;
    }
}