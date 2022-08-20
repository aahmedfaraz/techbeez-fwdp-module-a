const getPosts = (id) => new Promise( (res, rej) => {
    setTimeout( () => {
        if(id === 1) {
            // success
            res(['post1', 'post2', 'post3']);
        } else {
            // error
            rej('Invalid User ID')
        }
    } , 3000 );
} )

const startFacebook = async () => {
    // Facebook Login
    console.log("start");

    try {
        // Get My Posts
        const posts = await getPosts(10)
        console.log(posts);
    } catch(err) {
        // Error
        console.log("Error :", err);
    }

    // All Done
    console.log('Done');
}

startFacebook();