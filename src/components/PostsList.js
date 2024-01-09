import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList(){

    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author ='Edson Junior' body='React.js' />
                <Post author ='Paula Pinheiro' body='React.js 2' />
            </ul>
        </>  
    );
}
export default PostsList;