import {signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
import Register from './Register.js';
import InputGroup from '../componnenst/inputGroup.js';
import app from '../index.js';
import {auth} from '../constants/commons.js';
import Main from '../Pages/Main.js';




class Login {
  $emailGroup;
  $passwordGroup;
   constructor() {
       this.$formContainer = document.createElement('form');
      this.$formContainer.setAttribute('class','w-1/3 mx-auto p-8 mt-12 bg-blue-400 rounded-lg w-96' );
    //    this.$emailLabel = document.createElement('label');
    //      this.$emailLabel.innerText = 'Email';
    //      this.$emailInput = document.createElement('input');
    //      this.$emailInput.placeholder = 'Email';

    //      this.$passwordLabel = document.createElement('label');
    //      this.$passwordLabel.innerText = 'Password';
    //      this.$passwordInput = document.createElement('input');
    //      this.$passwordInput.placeholder = 'Password';
    this.$formContainer.addEventListener('submit', this.onSubmit);
         
    this.$emailGroup = new InputGroup('Email', 'email', 'Email');
    this.$passwordGroup = new InputGroup('Password', 'password', 'Password');
         
         this.$loginButton = document.createElement('button');
            this.$loginButton.innerText = 'Login';
            this.$loginButton.setAttribute('class','py-2 px-8 rounded-lg bg-yellow-400 text-black hover:bg-yellow-500');
       
            this.$goToRegister = document.createElement('span');
            this.$goToRegister.innerText = 'Not a member?';
            this.$goToRegister.setAttribute('class', 'text-white ml-4 cursor-pointer ');
            this.$goToRegister.addEventListener('click', this.goToRegisterPage);



   }
   goToRegisterPage = () => {
       const registerScreen = new Register();
       app.setActiveScreen(registerScreen);

   }
    onSubmit = async (event) => {
        event.preventDefault();
     try {
      const email = this.$emailGroup.getValue();
      const password = this.$passwordGroup.getValue();

      if (email && password) {
        const response =  await signInWithEmailAndPassword(auth, email, password);
        const user = response.user;
        if (user) {
          //  const mainScreen = new Main();
          //   app.setActiveScreen(mainScreen);
          alert('Login Successful');
        }
      }
     }catch(error) {
       alert(error.message);
     }
    };
   render(container) {
        //  this.$formContainer.appendChild(this.$emailLabel);
        //  this.$formContainer.appendChild(this.$emailInput);
        //  this.$formContainer.appendChild(this.$passwordLabel);
        //  this.$formContainer.appendChild(this.$passwordInput);
        this.$formContainer.appendChild(this.$emailGroup.render());
        this.$formContainer.appendChild(this.$passwordGroup.render());
         this.$formContainer.appendChild(this.$loginButton);
         this.$formContainer.appendChild(this.$goToRegister);
           container.appendChild(this.$formContainer); // 
    }
   
           
   }
     export default  Login;