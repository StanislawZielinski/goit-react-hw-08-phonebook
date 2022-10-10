import React from "react";
import PropTypes from "prop-types";
import './UpdateContact.css';

const UpdateContact = ({updateContact, id}) => {
            return (
                <button className="update-contact" onClick={()=>updateContact(id)}>update</button>
            )
} 
export default UpdateContact

UpdateContact.propTypes = {
    updateContact: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}