const submit = document.getElementById("submit");

submit.addEventListener("submit", createTwoElements)

function createTwoElements() {
    const data = document.createElement("p");
    data.innerHTML = "Username:";
    userdata.append(data);
}


// const userdata = document.getElementById("userdata");
// const data = document.createElement("p");
// data.innerHTML = "Username:";
// userdata.append(data);

// const username = document.getElementById("username").value;
// const password = document.getElementById("username").value;
// console.log(username);
// console.log(password);