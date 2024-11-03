const form = document.getElementById("form");

form.addEventListener("submit", createElements)

function createElements(event) {
    event.preventDefault()

    const formData = new FormData(form);
 
    const data = Object.fromEntries(formData);
    const userData = document.getElementById("userdata");

    for (const [key, value] of Object.entries(data)) {
        if(document.getElementById(key)) {
            const keyElement = document.getElementById(key);
            keyElement.innerHTML = `${key}: ${value}`;
        } else {
            const keyElement = document.createElement("p");
            keyElement.id = key;
            keyElement.innerHTML = `${key}: ${value}`;
            userData.append(keyElement);
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
//     const keyElement = document.createElement("p");
//     const keyElementTwo = document.createElement("p");

//     keyElement.setAttribute( "id", "user" );
//     keyElementTwo.setAttribute( "id", "pass" );

//     const username = document.getElementById("username").value
//     const password = document.getElementById("password").value

//     keyElement.innerHTML = "login: " + username;
//     keyElementTwo.innerHTML = "password: " + password; 

//     userdata.append(keyElement);
//     userdata.append(keyElementTwo);
// }       



// for (const element of form.elements) {
//     if (!element.name)
//         continue
//     formData[element.name] = element.value
// }

