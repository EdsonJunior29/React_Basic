import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

import classes from '../components/NewPost.module.css';

function NewPost() {

    const [enteredBody , setEnteredBody] = useState('');
    const [enteredAuthor , setEnteredAuthor] = useState('');
    const navigate = useNavigate();

    function changeBodyHandler(event){
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event){
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            author : enteredAuthor,
            body : enteredBody,
        };
        addPostHandler(postData);
    }

    function addPostHandler(postData) {
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        navigate('/');
    }

    return (
        <Modal>
            <form className={classes.form} onSubmit={submitHandler} >
                <p>
                    <label htmlFor="body"> Text </label>
                    <textarea id="body" required rows={3} onChange={changeBodyHandler}></textarea>
                </p>
                <p>
                    <label htmlFor="name"> Your Name</label>
                    <input type="text" id="name" required onChange={changeAuthorHandler}/>
                </p>
                <p className={classes.actions}>
                    <Link type='button' to={'..'} >Cancel</Link>
                    <button>Submit</button>
                </p>
            </form>
        </Modal>
    );

}

export default NewPost;