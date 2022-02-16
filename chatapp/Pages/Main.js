
import {signOut } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
import {auth} from '../constants/commons.js';
class Main {
    constructor() {
        this.$mainContainer = document.createElement('div');

       this.$welcome = document.createElement('h1');
        this.$welcome.innerText = 'Welcome to ChatApp';
          
        this.$sighOutButton = document.createElement('button');
        this.$sighOutButton.setAttribute('class', 'py-2 px-8 rounded-lg bg-yellow-400 text-black hover:bg-yellow-500' )
        this.$sighOutButton.innerText = 'Sign Out';
        this.$sighOutButton.addEventListener('click', this.signOut);

    }
    signOut = () => {
        signOut(auth).then((response) => {
            if (response) {
                alert('you have signed out');
            }
        }).catch((error) => {
            alert('error signing out');
        })
    }
    render(container) {
           this.$mainContainer.appendChild(this.$welcome);
           this.$mainContainer.appendChild(this.$sighOutButton);
              container.appendChild(this.$mainContainer);
    }
}
export default Main;