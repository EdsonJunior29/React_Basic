import { useState } from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from './Model';

function PostsList({ isPosting, onStopPosting }){
    const [enteredBody , setEnteredBody] = useState('');
    const [enteredAuthor , setEnteredAuthor] = useState('');
    const [post , setPost] = useState(false);

    function changeBodyHandler(event){
        setPost(true);
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event){
        setPost(true)
        setEnteredAuthor(event.target.value);
    }

    return (
        <>        
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
                </Modal>
            )}
           
           {post && (
                <ul className={classes.posts}>
                    <Post author ={enteredAuthor} body={enteredBody} />
                </ul>
           )}
            
        </>  
    );
}
export default PostsList;