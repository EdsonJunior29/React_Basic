import { useState } from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from './Model';

function PostsList(){

    const [enteredBody , setEnteredBody] = useState('');
    const [enteredAuthor , setEnteredAuthor] = useState('');

    function changeBodyHandler(event){
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event){
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <Modal>
                <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
            </Modal>
           
            <ul className={classes.posts}>
                <Post author ={enteredAuthor} body={enteredBody} />
            </ul>
        </>  
    );
}
export default PostsList;