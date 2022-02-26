import { signOut } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
import { auth } from '../constants/commons.js';
import ConversationItem from "./ConversationItem.js";
import NewConversationButton from "./NewConversationButton.js";
import NewConversationModal from "./NewConversationModal.js";
import mockConversions from '../constants/mocData.js';
console.log(mockConversions);
class ConversationList {
    constructor() {
        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'w-1/4 h-screen px-4 pt-4 overflow-auto');
        this.temp = new ConversationItem();
        this.$newConversationModal = new NewConversationModal();
        // console.log( this.$newConversationModal.$container )
        this.$newConversation = new NewConversationButton(this.$newConversationModal.$container);

        this.$sighOutButton = document.createElement('button');
        this.$sighOutButton.textContent = 'Sign Out';
        this.$sighOutButton.setAttribute('class', 'w-full px-4 py-2 text-white font-bold bg-red-400 cursor-pointer rounded-lg hover:bg-red-500');
        this.$sighOutButton.addEventListener('click', this.signOut);
    };
    signOut = () => {
        signOut(auth).then(() => {
            alert('signed out');
        }).catch((err) => {
            alert('err.message');
        })
    }

    render(container) {
        this.$container.appendChild(this.$newConversation.render());
        this.$container.appendChild(this.$newConversationModal.render());
        this.$container.appendChild(this.$sighOutButton);
        //    console.log( this.$newConversationModal.$container)
        for (let i = 0; i < 5; i++) {
            let temp = new ConversationItem(i);
            this.$container.appendChild(temp.render());
            console.log(i)

        }

        this.$container.appendChild(this.temp.render());

        container.appendChild(this.$container);
    }
}
export default ConversationList;
