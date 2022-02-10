// Challenge: 
// 1. Update text in the Scrimba mini-browser to match the title of this cast
// 2. Create an h2 with class 'tagline' and text "I can create HTML elements!"
// Add it right under the modified text.

const title = document.querySelector("h1");

// 1. Update text in the Scrimba mini-browser to match the title of this cast
title.innerHTML = "Creating and Modifying HTML elements";

const tagLine = document.createElement("h2");
tagLine.className = "tagline";
tagLine.innerHTML = "I can create HTML elements!";

title.append(tagLine);