const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const signinMsg = document.querySelector(".signin-status");
const signinBtn = document.querySelector(".signin-button");
signinBtn.addEventListener("click", e => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const usernamevalue = usernameInput.value;
    const passwordvalue = passwordInput.value;
    signinMsg.innerHTML = ``;
    let ifsend = true;
    if (emailRegex.test(usernamevalue) === false) {
        ifsend = false;
        usernameMsg.innerHTML = "Enter True Email";
    } else {
        usernameMsg.innerHTML = "";
    }
    if (passwordvalue.length === 0 || passwordvalue.length < 5) {
        passwordMsg.innerHTML = "Enter Password long(5)";
        ifsend = false;
    } else {
        passwordMsg.innerHTML = "";
    }
    if (ifsend) {
        const DataForSend = {
            title: "foo",
            email: usernamevalue,
            password: passwordvalue
        };
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(DataForSend),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                signinMsg.innerHTML = `Sign in Succfully`;
            });
    }
});