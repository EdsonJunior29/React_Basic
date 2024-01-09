import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList(){

    return (
       <ul className={classes.posts}>
            <Post author ='Edson Junior' body='React.js' />
            <Post author ='Paula Pinheiro' body='React.js 2' />
       </ul>
    );
}
export default PostsList;