
function Post(props){

    return (
        <div>
            <p>{ props.body }</p>
            <p>{ props.author }</p>
        </div>
    );
}

export default Post;