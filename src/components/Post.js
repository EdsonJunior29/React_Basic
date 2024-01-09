import classes from './Post.module.css';

function Post(props){
    return (
        <div>
            <div style={{color : "red"}}>
                <p>Css inline junto do HTML</p>
            </div>

            <div className="post">
                <p>Usando Css arquivo GLOBAL</p>
                <p>{ props.body }</p>
                <p>{ props.author }</p>
            </div>

            <div className={classes.post2}>
                <p>Usando Css arquivo </p>
                <p>{ props.body }</p>
                <p>{ props.author }</p>
            </div>
           
        </div>
    );
}

export default Post;