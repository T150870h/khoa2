import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
import InputGroup from '../componnenst/inputGroup.js';

import app from '../index.js';
import Login from '../Pages/Login.js';
import { auth } from '../constants/commons.js';



// console.log(auth);
class Register {

  constructor() {
    this.$registerContainer = document.createElement('form');
    this.$registerContainer.setAttribute('class',
      'w-1/3 mx-auto p-8 mt-12 bg-blue-400 rounded-lg w-96');

    this.$registerContainer.addEventListener('submit', this.onSubmit);


    this.$displayName = new InputGroup(
      'Display Name',
      'displayName',
      'Display Name'
    );
    this.$email = new InputGroup('Email', 'email', 'Email');

    this.$password = new InputGroup('Password', 'password', 'Password');

    this.$confirmPassword = new InputGroup('Confirm Password', 'Password', ' password')

    this.$registerButton = document.createElement('button');
    this.$registerButton.setAttribute('class', 'py-2 px-8 rounded-lg bg-yellow-400 text-black hover:bg-yellow-500');
    this.$registerButton.type = 'submit';
    this.$registerButton.innerText = 'Register';


    this.$goToLogin = document.createElement('span');
    this.$goToLogin.innerText = 'Already have an account?';
    this.$goToLogin.setAttribute('class', 'text-white ml-4 cursor-pointer ');
    this.$goToLogin.addEventListener('click', this.goToLoginPage);
  }     // cursor-pointer con trỏ chuột

  //   onSubmit = (event) => {
  //       event.preventDefault();
  //     //    const newUsers = {
  //     //        displayName: this.$displayName.getValue(),
  //     //           email: this.$email.getValue(),
  //     //             password: this.$password.getValue(),
  //     //             confirmPassword: this.$confirmPassword.getValue()
  //     //    }
  //     // console.log(newUsers);

  //     const email = this.$email.getValue();
  //     const password = this.$password.getValue();
  //     createUserWithEmailAndPassword(auth, email, password).then((res) => {
  //         const user = res.user;
  //         console.log(user);
  //     }).catch((error) => {
  //         alert(error.message);
  //     });

  //   }
  goToLoginPage = () => {
    const loginScreen = new Login();
    app.setActiveScreen(loginScreen)
  }



  // async await
  onSubmit = async (event) => {
    try {
      event.preventDefault();
      const email = this.$email.getValue();
      const password = this.$password.getValue();
      const confirmPassword = this.$confirmPassword.getValue();
      if (password === confirmPassword) {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;

        if (user) {
          const loginScreen = new Login();
          app.setActiveScreen(loginScreen);
        }
        else {
          alert("Password and Confirm Password do not match");
        }
      };
    }
    catch (error) {
      alert(error.message);
    }

  }

  render(container) {
    this.$registerContainer.appendChild(this.$displayName.render());
    this.$registerContainer.appendChild(this.$email.render());
    this.$registerContainer.appendChild(this.$password.render());
    this.$registerContainer.appendChild(this.$confirmPassword.render());
    this.$registerContainer.appendChild(this.$registerButton);
    this.$registerContainer.appendChild(this.$goToLogin);
    container.appendChild(this.$registerContainer);
  }
}
export default Register;