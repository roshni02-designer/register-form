function register() {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;

  // Check empty
  if(name=="" || email=="" || phone=="" || password==""){
    alert("Fill all fields!");
    return;
  }

  // Save data
  let user = {
    name: name,
    email: email,
    phone: phone,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration Successful ✅");
}