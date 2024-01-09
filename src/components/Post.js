const names = ['Edson Jr' , 'Paula Pinheiro'];
const chosenName = Math.random() > 0.5 ? names[0] : names[1];

function Post(){

    return (
        <div>
            <p>React.js</p>
            <p>{ chosenName }</p>
        </div>
    );
}

export default Post;