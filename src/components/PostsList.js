import { useState } from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from './Model';

function PostsList(){
    const [enteredBody , setEnteredBody] = useState('');
    const [enteredAuthor , setEnteredAuthor] = useState('');

    const [modalIsVisible , setModalIsVisible] = useState(true);

    let modalContent;

    function changeBodyHandler(event){
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event){
        setEnteredAuthor(event.target.value);
    }

    function hideModalHandler(){
        setModalIsVisible(false);
    }

    if(modalIsVisible) {
        modalContent = (
        <Modal onClose={hideModalHandler}>
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
        </Modal>);
    }

    return (
        <>        
            {modalContent}
           
            <ul className={classes.posts}>
                <Post author ={enteredAuthor} body={enteredBody} />
            </ul>
        </>  
    );
}
export default PostsList;