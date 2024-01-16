import { useState, useEffect } from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from './Modal';

function PostsList({ isPosting, onStopPosting }){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:3001/posts')
            const resData = await response.json();
            setPosts(resData);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
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