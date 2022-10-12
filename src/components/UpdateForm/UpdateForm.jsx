import React from "react";
import PropTypes from "prop-types";
import "../Form/Form.css";

const UpdateForm = ({handleUpdate, id, name, number}) => {
    return (
            <form className="form" onSubmit={(e)=>handleUpdate(e, id)}>
            <div className="input-wrapper">
                <label className="label">Name
                    <input
                    placeholder={name}
                    className="input"
                    type="text"
                    name="newName"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </label>
                <label className="label">Phone number
                    <input
                        className="input"
                        placeholder={number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                </label>
            </div>
                <button className="button" type="submit">Update</button>
            </form>
    )
}

export default UpdateForm

UpdateForm.propTypes = {
    handleUpdate: PropTypes.func.isRequired,
}