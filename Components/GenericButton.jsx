import PropTypes from 'prop-types';


export default function GenericButton({label, onClick, className}) {

    return(
        <button onClick={onClick} className={className}>{label}</button>
    );

};

GenericButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
}