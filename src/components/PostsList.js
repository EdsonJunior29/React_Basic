import { useState, useEffect } from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from './Modal';

function PostsList({ isPosting, onStopPosting }){
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:3001/posts');
            const resData = await response.json();
            setPosts(resData);
            setIsFetching(false);
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

            {!isFetching && posts.length > 0 && (
                 <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author ={post.author} body={post.body}/>)}
                 </ul>
            )}

            {!isFetching && posts.length === 0 && 
                <div style={{textAlign: 'center', color: 'black'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            
            }

            {isFetching && 
                <div style={{textAlign: 'center', color:'white'}}>
                    <p>Loading posts ..........</p>
                </div>
            }
        </>  
    );
}
export default PostsList;