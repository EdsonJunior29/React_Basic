import { Link, Form , redirect } from 'react-router-dom';
import Modal from '../components/Modal';

import classes from '../components/NewPost.module.css';

function NewPost() {
    return (
        <Modal>
            <Form method='POST' className={classes.form} >
                <p>
                    <label htmlFor="body"> Text </label>
                    <textarea id="body" name='body' required rows={3}></textarea>
                </p>
                <p>
                    <label htmlFor="name"> Your Name</label>
                    <input type="text" id="name" name='author' required/>
                </p>
                <p className={classes.actions}>
                    <Link type='button' to={'..'} >Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({request}){
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:3001/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return redirect('/');
}