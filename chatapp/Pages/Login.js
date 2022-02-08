
import InputGroup from '../componnenst/inputGroup.js';
class Login {
   constructor() {
       this.$formContainer = document.createElement('form');
      this.$formContainer.setAttribute('class',
      'w-1/3 mx-auto p-8 mt-12 bg-blue-400 rounded-lg ' );
    //    this.$emailLabel = document.createElement('label');
    //      this.$emailLabel.innerText = 'Email';
    //      this.$emailInput = document.createElement('input');
    //      this.$emailInput.placeholder = 'Email';

    //      this.$passwordLabel = document.createElement('label');
    //      this.$passwordLabel.innerText = 'Password';
    //      this.$passwordInput = document.createElement('input');
    //      this.$passwordInput.placeholder = 'Password';
         
    this.$emailGroup = new InputGroup('Email', 'email', 'Email');
    this.$passwordGroup = new InputGroup('Password', 'password', 'Password');
         
         this.$loginButton = document.createElement('button');
            this.$loginButton.innerText = 'Login';
            this.$loginButton.setAttribute('class',
             'py-2 px-8 rounded-lg bg-yellow-400 text-black hover:bg-yellow-500');



   }
   render() {
        //  this.$formContainer.appendChild(this.$emailLabel);
        //  this.$formContainer.appendChild(this.$emailInput);
        //  this.$formContainer.appendChild(this.$passwordLabel);
        //  this.$formContainer.appendChild(this.$passwordInput);
        this.$formContainer.appendChild(this.$emailGroup.render());
        this.$formContainer.appendChild(this.$passwordGroup.render());
         this.$formContainer.appendChild(this.$loginButton);
         return this.$formContainer;
    }
   
           
   }
     export default  Login;