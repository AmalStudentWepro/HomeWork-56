import axios from "axios";

const signin = document.querySelector('#signup');

signin.onclick = () => {
  window.location.href = "/src/pages/signup/";
};
let form = document.querySelector(".form-box");

form.onsubmit = async (e) => {
  e.preventDefault();
  let fn = new FormData(form);

  let name = fn.get("name"); 
  let email = fn.get("email"); 
  let password = fn.get("password");
  
  let user = {
    fullName: name,
      email,
      password,
  }

  try {
    await axios.post("")
  } catch (error) {
    console.error(error);
  }

}