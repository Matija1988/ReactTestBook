import { useEffect, useState } from "react";
import { AuthorSeed } from "../../Data/AuthorSeed";
import '../../style.css';
import NavBar from "../../Components/NavBar";
import GenericTable from "../../Components/GenericTable";
import { BookSeed } from "../../Data/BookSeed";
import AuthorUpsertForm from "../../Components/AuthorUpsertForm";
import GenericButton from "../../Components/GenericButton";

export default function Author() {

    const [authors, setAuthors] = useState([]);
    const [books, setBooks] = useState([]);
    const authorSeed = new AuthorSeed();
    const bookSeed = new BookSeed();

    useEffect(() => {
        setAuthors(authorSeed.getAuthors());
        setBooks(bookSeed.getBooks());
    }, []);

    function handleUpdate(author) {
        alert("Update pressed " + JSON.stringify(author));
    }

    function handleDelete(author) {
        alert("Delete pressed " + JSON.stringify(author));

        let idToRemove = author.Id;

       
        setAuthors(authors.filter(item => item.Id !== author.Id));
    }

    function getLastId(authors) {    
           const getLastAuthor = authors[authors.length - 1];
           const last = getLastAuthor.Id;
        
           return last;
      
    }

    function handleCreate(author) {
        const lastId = getLastId(authors);
        const id = lastId + 1;
        const newAuthor = {id, ...author};
        newAuthor.Id = id;
        setAuthors([...authors, newAuthor]);
       
    } 

    return (
        <div id="gridMain">
            <div>
                <h1 className="titleText">Authors</h1>
               <GenericTable data={authors} onUpdate={handleUpdate} onDelete={handleDelete} />
            </div>
            <div>
                <h1>Author upsert</h1>
            <AuthorUpsertForm createAuthor={handleCreate}/>
            </div>
            <h1>Books</h1>
            <GenericTable data={books} />
        </div>
    )
}