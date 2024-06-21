import { useState } from "react";
import GenericButton from "./GenericButton";
import PropTypes from 'prop-types';

export default function AuthorUspertForm({createAuthor}) {

    const [author, setNewAuthor] = useState({FirstName: '', LastName: ''})
    
    function handleInputChange(e) {
           
        const {name, value} = e.target;

        setNewAuthor({...author,[name]: value});
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        createAuthor(author);
        setNewAuthor({FirstName:'', LastName: ''});

    }

    return (
        <div className="authorUpsertDiv">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First name</label>
                    <input type="text" 
                    name="FirstName" 
                    placeholder="FirstName"
                    class="formTxtInput" 
                    value={author.FirstName}
                    onChange={handleInputChange} />
                </div>
                <div>
                    <label>Last name</label>
                    <input type="text" 
                    name="LastName" 
                    placeholder="LastName"
                    class="formTxtInput" 
                    value={author.LastName}
                    onChange={handleInputChange}/>
                </div>
                <button type="submit">CONFIRM</button>
            </form>
            
        </div>
    );

}

AuthorUspertForm.propTypes = {
    createAuthor: PropTypes.func.isRequired
};