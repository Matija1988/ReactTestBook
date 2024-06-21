import { useEffect, useState } from "react";
import { AuthorSeed } from "../../Data/AuthorSeed";
import '../../style.css';
import NavBar from "../../Components/NavBar";
import GenericTable from "../../Components/GenericTable";
import { BookSeed } from "../../Data/BookSeed";
import AuthorUpsertForm from "../../Components/AuthorUpsertForm";
import GenericButton from "../../Components/GenericButton";
import { array } from "prop-types";

export default function Author() {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const storedAuthors = localStorage.getItem('authors');
        if(storedAuthors) {
            setAuthors(JSON.parse(storedAuthors));    
        }

    }, []);

    function handleUpdate(author) {
        alert("Update presed " + JSON.stringify(author));
    }

    function handleDelete(author) {
        alert("Delete presed " + JSON.stringify(author));
    }

    function getLastId(authors) {
        const lastObject = authors[authors.length - 1].Id;
        alert(lastObject);
    }

    function handleCreate(author) {
        const lastId = getLastId;
        const id = lastId + 1;
        const newAuthor = {id, ...author};
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
            
        </div>
    )
}