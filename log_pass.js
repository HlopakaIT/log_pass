const submit = document.getElementById("form");

submit.addEventListener("submit", createTwoElements)

function createTwoElements(event) {
    event.preventDefault()


    if(document.getElementById("user")) {

        const username = document.getElementById("username").value
        const password = document.getElementById("password").value

        const NewElement = document.getElementById("user")
        const NewElementTwo = document.getElementById("pass")

        NewElement.innerHTML = "login: " + username;
        NewElementTwo.innerHTML = "password: " + password; 

    } else {
        const newElement = document.createElement("p");
        const newElementTwo = document.createElement("p");

        newElement.setAttribute( "id", "user" );
        newElementTwo.setAttribute( "id", "pass" );
    
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
    
        newElement.innerHTML = "login: " + username;
        newElementTwo.innerHTML = "password: " + password; 
    
        userdata.append(newElement);
        userdata.append(newElementTwo);
    }
}


























    // const bla = document.getElementById("bla");
    // const blu = document.getElementById("blu");

    // if(bla) {
    //     data.remove();
    //     datatwo.remove();
    //     const data = document.createElement("p");
    //     const datatwo = document.createElement("p");
    //     data.innerHTML = "login: ";
    //     datatwo.innerHTML = "password: ";
    //     userdata.append(data);
    //     userdata.append(datatwo);

    // } else {
        


    //     data.setAttribute( "id", "bla" );
    //     datatwo.setAttribute( "id", "blu");

    //     const username = document.getElementById("username").value;
    //     const password = document.getElementById("password").value;

    //     data.innerHTML = "login: " + username;
    //     datatwo.innerHTML = "password: " + password;

    //     userdata.append(data);
    //     userdata.append(datatwo);
//     }
// }


// const userdata = document.getElementById("userdata");
// const data = document.createElement("p");
// data.innerHTML = "Username:";
// userdata.append(data);

// const username = document.getElementById("username").value;
// const password = document.getElementById("username").value;
// console.log(username);
// console.log(password);