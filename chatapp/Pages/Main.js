
import { signOut } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
import { auth } from '../constants/commons.js';
import ConversationList from '../componnenst/ConversationList.js';
import ChatContainer from '../componnenst/ChatContainer.js';

class Main {
    _actieConversation;
    constructor() {
        this.$mainContainer = document.createElement('div');
        this.$mainContainer.setAttribute('class', 'flex');

        this.$conversationList = new ConversationList((conversation) => {
            this.setActiveConversation(conversation);
        });
        this.$ChatContainer = new ChatContainer();

    }
        // signOut = () => {
        //     signOut(auth).then((response) => {
        //         if (response) {
        //             alert('you have signed out');
        //         }
        //     }).catch((error) => {
        //         alert('error signing out');
        //     })
         // }

          setActiveConversation(conversation) {
             this.$ChatContainer.setActiveConversation(conversation);
          }
    render(container) {
        //    this.$mainContainer.appendChild(this.$welcome);
        //    this.$mainContainer.appendChild(this.$sighOutButton);
        this.$conversationList.render(this.$mainContainer);
        this.$ChatContainer.render(this.$mainContainer);
        container.appendChild(this.$mainContainer);
    }
}
export default Main;