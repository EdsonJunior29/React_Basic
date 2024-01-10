import { useState } from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from './Modal';

function PostsList({ isPosting, onStopPosting }){
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPost) => [postData, ...existingPost]);
    }

    return (
        <>        
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost 
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal>
            )}

            {posts.length > 0 && (
                 <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author ={post.author} body={post.body}/>)}
                 </ul>
            )}

            {posts.length === 0 && 
                <div style={{textAlign: 'center', color: 'black'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            
            }
        </>  
    );
}
export default PostsList;