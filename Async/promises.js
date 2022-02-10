

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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject("ERROR");
            }
        }, 2000); // Delaying 2000 miliseconds which is 2 seconds
    });
}

// createPost({
//     title: "Post Three",
//     body: "This is post three."
// })
//     .then(getPosts) // After creating the post (resolved) then do getPosts
//     .catch(error => console.log(error)); // To catch the error and showing a custom error message

// Async / Await : Wait for asynchronous process or action to complete
// async function init() {
//     // We are waiting for the createPost() function to be completed and after that move on and call getPosts() function
//     await createPost({
//         title: "Post Three",
//         body: "This is post three."
//     });

//     // Calling getPosts() function
//     getPosts();
// }

// init();

// Async + Await + Fetch + Handling Errors
async function fetchUsers() {
    try {
        const response = await fetch("http://jsonplaceholder.typicode.com/users/3");

        if (!response.ok) {
            throw new Error(response.status);
        }

        const data = await response.json();
        // console.log(data);
        console.log(`${ data.name } works in ${ data.company.name }`);
        
    } catch (error) {
        console.log(error);
    }
}

fetchUsers();


// Promise.all
// const promise1 = Promise.resolve("Resolved. Welcome to JavaScript");
// const promise2 = 2000;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, promise2, "Goodbye. Thank you."));

// Fetching users data from URL
// const promise4 = fetch("http://jsonplaceholder.typicode.com/users").then(response => response.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));

// Challenge: 
// The JSON Placeholder API has /users endpoint, 
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work. 

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3

// fetch("http://jsonplaceholder.typicode.com/users/3")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     })
//     .then(person => {
//         console.log(`${ person.name } works in ${ person.company.name }`);
//     })
//     .catch(error => console.log(error));

// Catch errors with async-wait
// async function getGithubUser() {
//     try {
//         const response = await fetch("https://api.github.com/users/dghsgdhsgd");
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
        
//     } catch (error) {
//         alert('Could not fetch user, try resetting your connection');
//         console.error(error);
//     }
// }

// getGithubUser();

// Promises Another Example
const buyFlightTickets = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = true;

            if (error) {
                reject("Sorry! Your payment was not successful.");
            } else {
                resolve("Thank you! Your payment was successful.");
            }
        }, 3000 );
    } );
}

buyFlightTickets()
.then( (success) => console.log(success) )
.catch( (error) => console.log(error) );

/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

const getUserData = () => {
    return new Promise( (resolve, reject) => {
        
        const error = true;

        if (error) {
            reject("Sorry! Data Not Found!");
        } else {
            resolve({
                firstName: "Jeet",
                lastName: "Khondker",
                age: 34,
                email: "jeetzhkhondker@getMaxListeners.com"
            });
        }
        
    } );
}

getUserData()
.then((data) => console.log(data))
.catch((error) => console.log(error));

/**
 * Fetch
 * 
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
fetch("https://jsonplaceholder.typicode.com/comments/1")
.then((response) => response.json())
.then((data) => console.log(data))

// POSTING data in API (that time JSON.stringify is required)
fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    body: JSON.stringify({
        postId: 1,
        name: "Jeet",
        email: "jeetzhkhondker@gmail.com",
        body: "The quick brown fox jumps over the lazy dog!"
    })
})
.then((response) => response.json())
.then((data) => console.log(data))

/**
 * Fetch - Challenge
 * 
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

fetch("https://jsonplaceholder.typicode.com/comments/1")
.then((response) => response.json())
.then((data) => console.log(data))

fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    body: JSON.stringify({
        name: "Jeet",
        email: "jeetzhkhondker@gmail.com",
        body: "The quick brown fox jumps over the lazy dog!",
        postId: 1
    })
})
.then((response) => response.json())
.then((data) => console.log(data))

// Async and Await

const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Picture");
            resolve("Photo Uploaded Successfully!");
        }, 3000 )
    } )

    let result = await uploadStatus; // waiting uploadingStatus to get resolved

    console.log(result);
    console.log(photos.length);
}

photoUpload();

//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getRandomJoke() {
    const response = await fetch(apiUrl);

    const data = await response.json();
    
    console.log("Joke of the Day: ", data.value);
}

getRandomJoke();