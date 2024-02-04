const form = document.querySelector(".form");
const register = document.querySelector("#register");
const userName = document.querySelector("#username");
const userSurname = document.querySelector("#usersurname");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorPassword = document.querySelector("#error-password");
const confirmPasswordError = document.querySelector("#confirm-password-error");

const timeTracker = () => {
  setTimeout(() => {
    document.querySelector(".error-alert").innerHTML = "";
    console.log("teste");
  }, 4000);
};

register.addEventListener("click", () => {
  const data = {
    name: userName.value,
    surname: userSurname.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };
  
  console.log(data);
});


password.addEventListener("keyup", (e) => {
  if (e.target.value.length < 8) {
    password.setAttribute("class", "error-style");
    errorPassword.innerText = "Minimum 8 Simvol olmalidir";
  } else {
    if (!e.target.value.includes("!") || !e.target.value.includes("@")) {
      errorPassword.innerText = "Sifrede ! ve @ olmalidir !";
    } else {
      errorPassword.innerText = "";
      password.setAttribute("class", "success-style");
    }
  }
});

confirmPassword.addEventListener("keyup", (e) => {
  if (e.target.value !== password.value) {
    confirmPasswordError.innerText = "Sifreler eyni deyil";
    confirmPassword.setAttribute("class", "error-style");
  } else {
    confirmPasswordError.innerText = "";
    confirmPassword.setAttribute("class", "success-style");
    // handleEvent(true);
    // if (userName.value.length > 0 && userSurname.value.length > 0) {
    //   register.removeAttribute("disabled");
    // }
  }
});


form.addEventListener("input", (e)=>{
if(userName.value &&
  userSurname.value &&
  password.value &&
  confirmPassword.value){
    register.disabled= false;
  }else{
    register.disabled= true;
  }
});

