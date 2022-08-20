// Create , Append

const newElement = document.createElement('h1');
newElement.id = 'top-heading'
newElement.className = 'heading'
newElement.innerHTML = 'Top Heading!'

document.body.appendChild(newElement);

// ======================================================

// Replace

const mainHeading = document.getElementById('main-h')
document.body.replaceChild(newElement, mainHeading)

// ======================================================

// Remove

document.body.removeChild(newElement);