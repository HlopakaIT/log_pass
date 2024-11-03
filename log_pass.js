const form = document.getElementById("form");

form.addEventListener("submit", createTwoElements)

function createTwoElements(event) {
    event.preventDefault()

    const formData = new FormData(form);
 
    const data = Object.fromEntries(formData);
    const userData = document.getElementById("userdata");

    for (const [key, value] of Object.entries(data)) {
        if(document.getElementById(key)) {
            const newElement = document.getElementById(key);
            newElement.innerHTML = `${key}: ${value}`;
        } else {
            const newElement = document.createElement("p");
            newElement.id = key;
            newElement.innerHTML = `${key}: ${value}`;
            userData.append(newElement);
        }

    }

}


// if(document.getElementById("user")) {

//     const username = document.getElementById("username").value
//     const password = document.getElementById("password").value

//     const NewElement = document.getElementById("user")
//     const NewElementTwo = document.getElementById("pass")

//     NewElement.innerHTML = "login: " + username;
//     NewElementTwo.innerHTML = "password: " + password; 

// } else {
//     const newElement = document.createElement("p");
//     const newElementTwo = document.createElement("p");

//     newElement.setAttribute( "id", "user" );
//     newElementTwo.setAttribute( "id", "pass" );

//     const username = document.getElementById("username").value
//     const password = document.getElementById("password").value

//     newElement.innerHTML = "login: " + username;
//     newElementTwo.innerHTML = "password: " + password; 

//     userdata.append(newElement);
//     userdata.append(newElementTwo);
// }       



// for (const element of form.elements) {
//     if (!element.name)
//         continue
//     formData[element.name] = element.value
// }

