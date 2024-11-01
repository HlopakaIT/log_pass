const submit = document.getElementById("submit");

const username = document.querySelector("#username")

submit.addEventListener("onclick", createTwoElements)

function createTwoElements() {


  
    const username = document.getElementById("username").value;
    const password = document.getElementById("username").value;
    console.log(username);
    console.log(password);
}
// const userdata = document.getElementById("userdata");
// const data = document.createElement("p");
// data.innerHTML = "Username:";
// userdata.append(data);