const posts = [
    {
        title: "Post One",
        body: "This is post one."
    }, 
    {
        title: "Post Two",
        body: "This is post two."
    },
];

function getPosts() {
    setTimeout(() => {
        let output = `<h1>Blog Posts</h1><hr>`;
        posts.forEach((post, index) => {
            output += 
            `
                <li>
                    ${ post.title } - ${ post.body }
                </li>
            `;
        });
        document.body.innerHTML = output;
    }, 1000); // Delaying 1000 miliseconds which is 1 second
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback(); // Calling it back
    }, 2000); // Delaying 2000 miliseconds which is 2 seconds
}

// getPosts();

createPost({
    title: "Post Three",
    body: "This is post three."
}, getPosts); // Making getPosts() function as a callback function after createPost() function is executed.