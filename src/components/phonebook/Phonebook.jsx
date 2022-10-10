import React from "react";
import "./Phonebook.css"
import Form from "../Form/Form";
import DeleteBtn from "components/DeleteBtn/DeleteBtn";
import UpdateContact from "components/UpdateContact/UpdateContact"
import Filter from "../Filter/Filter"
import Contacts from "../Contacts/Contacts";
import {  filterContact } from "../../redux/contactsSlice";
import { useGetPostsQuery, useAddNewPostMutation, useDeletePostMutation, useUpdateContactMutation } from "../../redux/apiSlice";
import { Audio } from 'react-loader-spinner';
import { useSelector, useDispatch } from "react-redux";
import Notiflix from 'notiflix';
import {Example} from "../UpdateModal/UpdateModal";
import { render } from 'react-dom';

const Phonebook = () => {
    const { data, isLoading, isSuccess, isError, error } = useGetPostsQuery();
    const [addNewContact] = useAddNewPostMutation();
    const [deleteContact] = useDeletePostMutation();
    const [updateContact] = useUpdateContactMutation();
    const dispatch = useDispatch();
    const filterStore = useSelector(state => state.contacts.filter);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const name = form.elements.name.value;
        const phoneNumber = form.elements.number.value;
        const canSave = [name, phoneNumber].every(Boolean) && !isLoading;
        for (const contact of data) {
            if (contact.name.includes(name)) {
                Notiflix.Notify.failure(`${name} is already in contacts`)
                return
            }  
        };

        if (canSave) {
            try {
                Notiflix.Loading.standard('wait...');
                Notiflix.Loading.remove(2500);
                await addNewContact ({ name, number: phoneNumber }).unwrap();
            }
            catch (error) {
                alert("Failed to add contact")
            }
        }
    }

    const deleteItem = async (id) => {
        Notiflix.Loading.standard('wait...');
        Notiflix.Loading.remove(2500);
        await deleteContact(id);
    };

    const updateItem = (id) => {
        // const form = evt.currentTarget;
        // const name = form.elements.name.value;
        // const phoneNumber = form.elements.number.value;
        // Notiflix.Loading.standard('wait...');
        // Notiflix.Loading.remove(2500);
        // const name = "Dawid";
        // const number = "123456";
        // await updateContact({id, name, number});
        render(<Example />);
    };


        const renderContacts = (contacts, filter) => {
            if (!filter) {
                if (isLoading) {
                    return <Audio/>
                }
                else if (isSuccess) {
                    return contacts.map(contact => {
                        return <li className="contact-list-item" key={contact.id}>
                            <div className="contacts" >{contact.name}: {contact.number}
                                <div className="contacts-btn">
                                    <UpdateContact updateContact={updateItem} id={contact.id} />
                                    <DeleteBtn deleteContact={deleteItem} id={contact.id} />
                                </div>
                            </div>
                        </li>
                    })
                }
                else if (isError){
                    return <div>{error.toString()}</div>
                }
            }
        
        const filterFunction = contacts.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()));
    
        return (
            filterFunction.map(contact =>
            {
                return <li className="contact-list-item" key={contact.id}>
                    <div className="contacts" >{contact.name}: {contact.number}
                        <div className="contacts-btn">
                            <UpdateContact updateContact={updateItem} id={contact.id} />
                            <DeleteBtn deleteContact={deleteItem} id={contact.id} />
                         </div>
                    </div>
                </li>
            })
        )
    }


    const onChange = (evt) => {
        dispatch(filterContact(evt.target.value));
    };   
 return (
            <div>
                <Form handleSubmit={handleSubmit} />
                    <div className="contacts-wrapper">
                    <Filter onChange={onChange} />
                    <Contacts renderContacts={renderContacts}
                    contacts={data} filter={filterStore}/>
                </div>
            </div>
    )
}
export default Phonebook