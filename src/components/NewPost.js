import classes from './NewPost.module.css';

function NewPost() {

    function changeBodyHandler(event) {
        //Recupera os dados que estão sendo digitados -> event.target.value
        console.log(event.target.value);
    }

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body"> Text </label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler}></textarea>
            </p>
            <p>
                <label htmlFor="name"> Your Name</label>
                <input type="text" id="name" required />
            </p>
        </form>
    );

}

export default NewPost;