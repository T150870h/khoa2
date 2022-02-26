import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
import Login from "./Pages/Login.js";
import { auth } from "./constants/commons.js";
import Register from "./Pages/Register.js";
import Main from './Pages/Main.js';
// const appEl = document.getElementById('app');

// const LoginPage = new Login();
//  const RegisterScreen = new Register();

// appEl.appendChild(LoginPage.render());

// appEl.appendChild(RegisterScreen.render()); 


class App {
  _activeScreen;
  constructor(view) {
    this.view = view;  // là một thẻ div chứa giao diện của app
    this.onAuthenticationListener();
  }

  onAuthenticationListener = () => {
    onAuthStateChanged(auth, (user) => {
      //  console.log(user);
      if (user) {
        const mainScreen = new Main();
        this.setActiveScreen(mainScreen);
      } else {
        const loginScreen = new Login();
        this.setActiveScreen(loginScreen);
      }
    })
  }
  setActiveScreen(screen) {
    if (this._activeScreen) {
      this.view.innerHTML = '';// xoá hết tất cả các html trong app hiển thị trên màn hình 
      screen.render(this.view);// truyền thẻ div chứa giao diện của app vào screen.render()
    }
    this._activeScreen = screen;
    screen.render(this.view);
  }
}

const view = document.getElementById('app');
const app = new App(view); // truyền vào thẻ div chứa giao diện của app

// const LoginScreen = new Login();
// const RegisterScreen = new Register();

// console.log(view)
// app.setActiveScreen(LoginScreen);
// app.setActiveScreen(RegisterScreen);

export default app;






