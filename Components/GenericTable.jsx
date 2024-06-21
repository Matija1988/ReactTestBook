import GenericButton from "./GenericButton";
import PropTypes from 'prop-types';


export default function GenericTable({data, onUpdate, onDelete}) {

    if(!data || data.length === 0) {
        return <p>No data to load</p>;
    }
    
    const columns = Object.keys(data[0]);

    return(
        <div>
            <table className="genTable">
                <thead>
                    <tr>
                        {columns.map((column) =>
                        (
                            <th key={column}>{column}</th>
                        ))}
                        <th style={{width: 150}}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) =>(
                        <tr key={rowIndex}>
                            {columns.map((column) => (
                                <td key ={column}>{row[column]}</td>
                                
                            ))}
                            <td> 
                                <GenericButton onClick={() => onUpdate(row)} label="Update" className="updateBtn" />
                                <GenericButton onClick={() => onDelete(row)} label="Delete" className="deleteBtn" />
                              </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

GenericTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}