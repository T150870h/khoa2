  import Login from "./Pages/Login.js";
  
const appEl = document.getElementById('app');
const LoginPage = new Login();
appEl.appendChild(LoginPage.render());